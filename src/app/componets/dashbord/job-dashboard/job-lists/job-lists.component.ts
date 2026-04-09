import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import flatpickr from 'flatpickr';
import { RouterModule } from '@angular/router';
import { Job, JobService } from './job.service';

@Component({
  selector: 'app-job-lists',
  standalone: true,
  imports: [SharedModule, NgSelectModule, FlatpickrModule, RouterModule, FormsModule],
  providers: [FlatpickrDefaults],
  templateUrl: './job-lists.component.html',
  styleUrls: ['./job-lists.component.scss']
})
export class JobListsComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  jobs: Job[] = [];

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  Math = Math;

  flatpickrOptions: any = { inline: true };

  constructor(
    private readonly modalService: NgbModal,
    private readonly jobService: JobService
  ) {}

  ngOnInit(): void {
    this.jobService.total$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(total => {
      this.totalItems = total;
      this.totalPages = Math.ceil(total / this.pageSize);
    });

    this.jobService.jobs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(jobs => {
      this.jobs = jobs;
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
    this.jobService.loadPage(this.currentPage, this.pageSize);
  }

  removeData(id: number): void {
    this.jobService.removeJob(id);
    this.loadData();
  }

  open(content: any): void {
    this.modalService.open(content, { windowClass: 'modalCusSty', size: 'lg' });
  }
}
