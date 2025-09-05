import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Empleado, EmpleadoResponse } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private readonly apiUrl = `${environment.apiUrl}/v1`;

  constructor(private readonly http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<EmpleadoResponse>(`${this.apiUrl}/empleados`).pipe(
      map(response => response.data.data)
    );
  }

  createEmpleado(empleado: Partial<Empleado>): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.apiUrl}/empleados`, empleado);
  }

  updateEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.apiUrl}/empleados/${empleado.id}`, empleado);
  }

  deleteEmpleado(id: number): Observable<boolean> {
    return this.http.delete<any>(`${this.apiUrl}/empleados/${id}`).pipe(
      map(() => true)
    );
  }

  getEmpleadoById(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.apiUrl}/empleados/${id}`);
  }
}
