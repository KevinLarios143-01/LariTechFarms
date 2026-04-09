import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import flatpickr from 'flatpickr';
import { RouterModule } from '@angular/router';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { Task, TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterModule, SharedModule, NgbModule, NgSelectModule, FlatpickrModule, NgApexchartsModule, FormsModule, ReactiveFormsModule, AngularEditorModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [FlatpickrDefaults]
})
export class TaskListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  tasks: Task[] = [];
  standard: any = [''];

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

  flatpickrOptions: any = { inline: true };

  constructor(
    private readonly modalService: NgbModal,
    private readonly taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskService.total$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(total => {
      this.totalItems = total;
      this.totalPages = Math.ceil(total / this.pageSize);
    });

    this.taskService.tasks$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(tasks => {
      this.tasks = tasks;
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
    this.taskService.loadPage(this.currentPage, this.pageSize);
  }

  removeData(no: number): void {
    this.taskService.removeTask(no);
    this.loadData();
  }

  edit(editContent: any): void {
    this.modalService.open(editContent, { windowClass: 'modalCusSty', size: 'lg' });
  }

  htmlContent = '';
  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '13rem',
    minHeight: '5rem',
    placeholder: 'Ingrese texto aquí...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      { name: 'quote', class: 'quote' },
      { name: 'redText', class: 'redText' },
      { name: 'titleText', class: 'titleText', tag: 'h1' },
    ]
  };
}
