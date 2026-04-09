import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import flatpickr from 'flatpickr';
import { RouterModule } from '@angular/router';
import { Project, ProjectService } from './project.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterModule, SharedModule, NgbModule, NgSelectModule, FlatpickrModule, FormsModule, ReactiveFormsModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [FlatpickrDefaults]
})
export class ProjectListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  projects: Project[] = [];
  selected = ['Faith Harris', 'Austin Bell', 'Maria Bower', 'Peter Hill'];

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

  flatpickrOptions: any = { inline: true };

  constructor(
    private readonly modalService: NgbModal,
    private readonly projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectService.total$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(total => {
      this.totalItems = total;
      this.totalPages = Math.ceil(total / this.pageSize);
    });

    this.projectService.projects$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(projects => {
      this.projects = projects;
    });

    this.loadData();

    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
    flatpickr('#inlinetime', this.flatpickrOptions);

    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      defaultDate: '2023-11-07 14:30',
    };
    flatpickr('#pretime', this.flatpickrOptions);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadData();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.loadData();
  }

  private loadData(): void {
    this.projectService.loadPage(this.currentPage, this.pageSize);
  }

  removeData(id: number): void {
    this.projectService.removeProject(id);
    this.loadData();
  }

  edit(editContent: any): void {
    this.modalService.open(editContent, { windowClass: 'modalCusSty', size: 'lg' });
  }
}
