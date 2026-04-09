import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  No: number;
  Task: string;
  badge: string;
  Department: string;
  img: string;
  AssignTo: string;
  Priority: string;
  PriorityStatus: string;
  StartDate: string;
  Deadline: string;
  progress: number;
  progressStatus: string;
  worksStatus: string;
  worksStatusIcon: string;
  worksText: string;
}

const TASK_DATA: Task[] = [
  { No: 1, Task: 'Marketing materials Issues', badge: 'warning', Department: 'Marketing', img: './assets/images/users/10.jpg', AssignTo: 'Faith Harris', Priority: 'Alta', PriorityStatus: 'danger', StartDate: '11-03-2021', Deadline: '19-05-2021', progress: 80, progressStatus: 'success', worksStatus: 'warning', worksStatusIcon: '', worksText: 'En Espera' },
  { No: 2, Task: 'Logo Design', badge: 'danger', Department: 'Designing', img: './assets/images/users/1.jpg', AssignTo: 'Austin Bell', Priority: 'Baja', PriorityStatus: 'success', StartDate: '05-02-2021', Deadline: '21-04-2021', progress: 70, progressStatus: 'success', worksStatus: 'danger', worksStatusIcon: 'info', worksText: 'Retrasada' },
  { No: 3, Task: 'Theme Update', badge: 'warning', Department: 'Designing', img: './assets/images/users/2.jpg', AssignTo: 'Maria Bower', Priority: 'Media', PriorityStatus: 'warning', StartDate: '23-01-2021', Deadline: '25-02-2021', progress: 40, progressStatus: 'success', worksStatus: 'success', worksStatusIcon: '', worksText: 'Completada' },
  { No: 4, Task: 'Design Updated', badge: 'warning', Department: 'Designing', img: './assets/images/users/3.jpg', AssignTo: 'Peter Hill', Priority: 'Alta', PriorityStatus: 'danger', StartDate: '12-02-2021', Deadline: '16-06-2021', progress: 50, progressStatus: 'success', worksStatus: 'primary', worksStatusIcon: '', worksText: 'En Progreso' },
  { No: 5, Task: 'HTML code Updated', badge: 'danger', Department: 'Designing', img: './assets/images/users/4.jpg', AssignTo: 'Victoria Lyman', Priority: 'Alta', PriorityStatus: 'danger', StartDate: '05-02-2021', Deadline: '22-04-2021', progress: 50, progressStatus: 'success', worksStatus: 'primary', worksStatusIcon: '', worksText: 'En Progreso' },
  { No: 6, Task: 'Application Bugs fix', badge: 'danger', Department: 'Angular', img: './assets/images/users/5.jpg', AssignTo: 'Adam Quinn', Priority: 'Media', PriorityStatus: 'warning', StartDate: '11-04-2021', Deadline: '16-06-2021', progress: 80, progressStatus: 'success', worksStatus: 'danger', worksStatusIcon: 'info', worksText: 'Retrasada' },
  { No: 7, Task: 'Theme update', badge: 'primary', Department: 'Designing', img: './assets/images/users/4.jpg', AssignTo: 'Melanie Coleman', Priority: 'Baja', PriorityStatus: 'success', StartDate: '23-01-2021', Deadline: '25-02-2021', progress: 40, progressStatus: 'primary', worksStatus: 'primary', worksStatusIcon: '', worksText: 'En Progreso' },
  { No: 8, Task: 'Jquery Issues Fix', badge: 'success', Department: 'Development', img: './assets/images/users/12.jpg', AssignTo: 'Max Wilson', Priority: 'Alta', PriorityStatus: 'danger', StartDate: '13-03-2021', Deadline: '05-05-2021', progress: 10, progressStatus: 'success', worksStatus: 'success', worksStatusIcon: '', worksText: 'Completada' },
];

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly _allTasks: Task[] = [...TASK_DATA];
  private readonly _tasks$ = new BehaviorSubject<Task[]>([]);
  private readonly _total$ = new BehaviorSubject<number>(0);

  get tasks$(): Observable<Task[]> { return this._tasks$.asObservable(); }
  get total$(): Observable<number> { return this._total$.asObservable(); }

  constructor() {
    this.loadPage(1, 10);
  }

  loadPage(page: number, pageSize: number): void {
    const total = this._allTasks.length;
    const start = (page - 1) * pageSize;
    const end = Math.min(start + pageSize, total);
    this._tasks$.next(this._allTasks.slice(start, end));
    this._total$.next(total);
  }

  removeTask(no: number): void {
    const idx = this._allTasks.findIndex(t => t.No === no);
    if (idx !== -1) {
      this._allTasks.splice(idx, 1);
    }
  }
}
