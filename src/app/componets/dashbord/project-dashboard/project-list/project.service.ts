import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ProjectTeam {
  team1?: string;
  team2?: string;
  team3?: string;
  team4?: string;
  team5?: string;
}

export interface Project {
  ID: number;
  projectTitle: string;
  projectTitleStatus: string;
  client: string;
  TeamMemeber: ProjectTeam[];
  priority: string;
  priorityStatus: string;
  startDate: string;
  deadline: string;
  workProgressText: string;
  workProgressPercentage: number;
  workProgressPercentageStatus: string;
  statusText: string;
  statusTextIcon: string;
  status: string;
}

const PROJECT_DATA: Project[] = [
  { ID: 1, projectTitle: 'Design Updated', projectTitleStatus: 'warning', client: 'Julia Walker', TeamMemeber: [{ team1: './assets/images/users/4.jpg', team2: './assets/images/users/15.jpg', team3: './assets/images/users/5.jpg', team4: './assets/images/users/14.jpg' }], priority: 'Alta', priorityStatus: 'danger', startDate: '12-02-2021', deadline: '16-06-2021', workProgressText: 'Estado Proyecto', workProgressPercentageStatus: 'primary', workProgressPercentage: 80, statusText: 'En Progreso', statusTextIcon: '', status: 'primary' },
  { ID: 2, projectTitle: 'HTML Code Updated', projectTitleStatus: 'danger', client: 'Diane Short', TeamMemeber: [{ team1: './assets/images/users/2.jpg', team2: './assets/images/users/10.jpg', team3: './assets/images/users/3.jpg' }], priority: 'Baja', priorityStatus: 'success', startDate: '01-01-2021', deadline: '22-04-2021', workProgressText: 'Estado Proyecto', workProgressPercentageStatus: 'warning', workProgressPercentage: 50, statusText: 'Retrasado', statusTextIcon: 'info', status: 'danger' },
  { ID: 3, projectTitle: 'Angular Issues fixed', projectTitleStatus: 'success', client: 'Pippa Welch', TeamMemeber: [{ team1: './assets/images/users/4.jpg', team2: './assets/images/users/11.jpg', team3: './assets/images/users/5.jpg', team4: './assets/images/users/6.jpg', team5: './assets/images/users/7.jpg' }], priority: 'Media', priorityStatus: 'warning', startDate: '11-04-2021', deadline: '16-06-2021', workProgressText: 'Estado Proyecto', workProgressPercentageStatus: 'success', workProgressPercentage: 100, statusText: 'En Curso', statusTextIcon: '', status: 'warning' },
  { ID: 4, projectTitle: 'Marketing Material Issues', projectTitleStatus: 'primary', client: 'Gabrielle Fisher', TeamMemeber: [{ team1: './assets/images/users/8.jpg', team2: './assets/images/users/12.jpg', team3: './assets/images/users/9.jpg' }], priority: 'Alta', priorityStatus: 'danger', startDate: '11-04-2021', deadline: '16-06-2021', workProgressText: 'Estado Proyecto', workProgressPercentageStatus: 'success', workProgressPercentage: 100, statusText: 'Completado', statusTextIcon: '', status: 'success' },
  { ID: 5, projectTitle: 'Logo Design', projectTitleStatus: 'primary', client: 'Gabrielle Fisher', TeamMemeber: [{ team1: './assets/images/users/1.jpg', team2: './assets/images/users/13.jpg', team3: './assets/images/users/2.jpg', team4: './assets/images/users/4.jpg' }], priority: 'Alta', priorityStatus: 'danger', startDate: '11-03-2021', deadline: '16-06-2021', workProgressText: 'Estado Proyecto', workProgressPercentageStatus: 'orange', workProgressPercentage: 30, statusText: 'Completado', statusTextIcon: '', status: 'success' },
  { ID: 6, projectTitle: 'Angular Issues fixed', projectTitleStatus: 'success', client: 'James Wilson', TeamMemeber: [{ team1: './assets/images/users/3.jpg', team2: './assets/images/users/4.jpg', team3: './assets/images/users/12.jpg' }], priority: 'Media', priorityStatus: 'warning', startDate: '05-02-2021', deadline: '21-04-2021', workProgressText: 'Estado Proyecto', workProgressPercentageStatus: 'danger', workProgressPercentage: 0, statusText: 'Retrasado', statusTextIcon: 'info', status: 'danger' },
  { ID: 7, projectTitle: 'Theme Update', projectTitleStatus: 'primary', client: 'Ryan Terry', TeamMemeber: [{ team1: './assets/images/users/8.jpg', team2: './assets/images/users/15.jpg', team3: './assets/images/users/9.jpg', team4: './assets/images/users/16.jpg' }], priority: 'Baja', priorityStatus: 'success', startDate: '21-01-2021', deadline: '15-03-2021', workProgressText: 'Estado Proyecto', workProgressPercentageStatus: 'danger', workProgressPercentage: 0, statusText: 'No Iniciado', statusTextIcon: '', status: 'info' },
  { ID: 8, projectTitle: 'Jquery issues fix', projectTitleStatus: 'success', client: 'Sam Gray', TeamMemeber: [{ team1: './assets/images/users/4.jpg', team2: './assets/images/users/11.jpg', team3: './assets/images/users/7.jpg', team4: './assets/images/users/13.jpg' }], priority: 'Alta', priorityStatus: 'danger', startDate: '21-01-2021', deadline: '15-03-2021', workProgressText: 'Estado Proyecto', workProgressPercentageStatus: 'success', workProgressPercentage: 100, statusText: 'Completado', statusTextIcon: '', status: 'success' },
];

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly _allProjects: Project[] = [...PROJECT_DATA];
  private readonly _projects$ = new BehaviorSubject<Project[]>([]);
  private readonly _total$ = new BehaviorSubject<number>(0);

  get projects$(): Observable<Project[]> { return this._projects$.asObservable(); }
  get total$(): Observable<number> { return this._total$.asObservable(); }

  constructor() {
    this.loadPage(1, 10);
  }

  loadPage(page: number, pageSize: number): void {
    const total = this._allProjects.length;
    const start = (page - 1) * pageSize;
    const end = Math.min(start + pageSize, total);
    this._projects$.next(this._allProjects.slice(start, end));
    this._total$.next(total);
  }

  removeProject(id: number): void {
    const idx = this._allProjects.findIndex(p => p.ID === id);
    if (idx !== -1) {
      this._allProjects.splice(idx, 1);
    }
  }
}
