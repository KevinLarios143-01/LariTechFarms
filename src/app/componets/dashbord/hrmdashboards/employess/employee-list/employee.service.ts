import {Injectable, PipeTransform} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap, map, catchError} from 'rxjs/operators';
import { SortDirection } from '@angular/material/sort';
import { employeeSortColumn } from '../../../../../shared/directives/sortable.directive';
import { Empleado, EmpleadoResponse, EmpleadoResponse2 } from '../../../../../shared/interfaces/empleado';
import { environment } from '../../../../../../environments/environment';

interface SearchResult {
  employeeData: Empleado[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: employeeSortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(employeeData: Empleado[], column: employeeSortColumn, direction: string): Empleado[] {
  if (direction === '' || column === '') {
    return employeeData;
  } else {
    return [...employeeData].sort((a:any, b:any) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(employee: Empleado, term: string, pipe: PipeTransform) {
  return employee.nombre.toLowerCase().includes(term.toLowerCase())
    || employee.apellido.toLowerCase().includes(term.toLowerCase())
    || employee.id.toString().includes(term.toLowerCase())
    || employee.puesto?.toLowerCase().includes(term.toLowerCase())
    || employee.telefono?.toLowerCase().includes(term.toLowerCase())
    || employee.fechaContratacion?.toLowerCase().includes(term.toLowerCase())
    || employee.correo?.toLowerCase().includes(term.toLowerCase())
}

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private readonly apiUrl = `${environment.apiUrl}/v1/empleados`;
  private readonly _loading$ = new BehaviorSubject<boolean>(true);
  private readonly _search$ = new Subject<void>();
  private readonly _employeeData$ = new BehaviorSubject<Empleado[]>([]);
  private readonly _total$ = new BehaviorSubject<number>(0);

  private readonly _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private readonly pipe: DecimalPipe, private readonly http: HttpClient) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._employeeData$.next(result.employeeData);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get employeeData$() { return this._employeeData$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  getEmployeeStats(): Observable<EmpleadoResponse2> {
    return this.http.get<EmpleadoResponse2>(`${environment.apiUrl}/v1/empleados/stats`);
  }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: employeeSortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {pageSize, page, searchTerm} = this._state;

    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', pageSize.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return this.http.get<EmpleadoResponse>(this.apiUrl, { params }).pipe(
      map(response => {
        const employeeData = this.mapEmpleadosToEmployeeList(response.data.data);
        return {
          employeeData,
          total: response.data.pagination.total
        };
      }),
      catchError(() => of({ employeeData: [], total: 0 }))
    );
  }

  private mapEmpleadosToEmployeeList(empleados: Empleado[]): Empleado[] {
    return empleados.map(emp => ({
      ...emp,
      img: './assets/images/users/1.jpg',
      tiempoTrabajo: this.calculateWorkTime(emp.fechaContratacion)
    }));
  }

  public calculateWorkTime(joinDate: string): string {
    const start = new Date(joinDate);
    const now = new Date();
    const diff = now.getTime() - start.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    return `${years} yrs ${months} mons ${days} days`;
  }
}
