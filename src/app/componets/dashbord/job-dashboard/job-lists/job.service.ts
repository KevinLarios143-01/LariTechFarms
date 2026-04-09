import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Job {
  id: number;
  position: string;
  type: string;
  typeText: string;
  postedDate: string;
  lastDateToApply: string;
  closedDate: string;
  statusText: string;
  status: string;
}

const JOB_DATA: Job[] = [
  { id: 1, position: 'Senior PHP Developer', type: 'Full-Time', typeText: 'Tiempo Completo', postedDate: '12-01-2021', lastDateToApply: '24-01-2021', closedDate: '25-01-2021', statusText: 'Activo', status: 'success' },
  { id: 2, position: 'Fresher Web Designer', type: 'Full-Time', typeText: 'Tiempo Completo', postedDate: '15-02-2021', lastDateToApply: '21-02-2021', closedDate: '23-02-2021', statusText: 'Activo', status: 'success' },
  { id: 3, position: 'Senior Web Developer', type: 'Full-Time', typeText: 'Tiempo Completo', postedDate: '16-02-2021', lastDateToApply: '03-03-2021', closedDate: '05-03-2021', statusText: 'Activo', status: 'success' },
  { id: 4, position: 'Fresher UI Designer', type: 'Part-Time', typeText: 'Medio Tiempo', postedDate: '16-01-2021', lastDateToApply: '03-02-2021', closedDate: '05-02-2021', statusText: 'Inactivo', status: 'danger' },
  { id: 5, position: 'SEO Specialist', type: 'Full-Time', typeText: 'Tiempo Completo', postedDate: '16-03-2021', lastDateToApply: '23-03-2021', closedDate: '30-03-2021', statusText: 'Activo', status: 'success' },
  { id: 6, position: 'Senior Wordpress Developer', type: 'Full-Time', typeText: 'Tiempo Completo', postedDate: '16-01-2021', lastDateToApply: '23-01-2021', closedDate: '30-01-2021', statusText: 'Inactivo', status: 'danger' },
  { id: 7, position: 'Senior Accountant', type: 'Full-Time', typeText: 'Tiempo Completo', postedDate: '18-02-2021', lastDateToApply: '25-02-2021', closedDate: '28-02-2021', statusText: 'Activo', status: 'success' },
  { id: 8, position: 'Senior Software Engineer', type: 'Full-Time', typeText: 'Tiempo Completo', postedDate: '21-03-2021', lastDateToApply: '15-03-2021', closedDate: '20-03-2021', statusText: 'Activo', status: 'success' },
  { id: 9, position: 'Fresher Angular Developer', type: 'Full-Time', typeText: 'Tiempo Completo', postedDate: '21-01-2021', lastDateToApply: '15-02-2021', closedDate: '20-02-2021', statusText: 'Inactivo', status: 'danger' },
  { id: 10, position: 'Senior Angular Developer', type: 'Freelancer', typeText: 'Freelancer', postedDate: '25-03-2021', lastDateToApply: '15-04-2021', closedDate: '20-04-2021', statusText: 'Activo', status: 'success' },
];

@Injectable({ providedIn: 'root' })
export class JobService {
  private readonly _allJobs: Job[] = [...JOB_DATA];
  private readonly _jobs$ = new BehaviorSubject<Job[]>([]);
  private readonly _total$ = new BehaviorSubject<number>(0);

  get jobs$(): Observable<Job[]> { return this._jobs$.asObservable(); }
  get total$(): Observable<number> { return this._total$.asObservable(); }

  constructor() {
    this.loadPage(1, 10);
  }

  loadPage(page: number, pageSize: number): void {
    const total = this._allJobs.length;
    const start = (page - 1) * pageSize;
    const end = Math.min(start + pageSize, total);
    this._jobs$.next(this._allJobs.slice(start, end));
    this._total$.next(total);
  }

  removeJob(id: number): void {
    const idx = this._allJobs.findIndex(j => j.id === id);
    if (idx !== -1) {
      this._allJobs.splice(idx, 1);
    }
  }
}
