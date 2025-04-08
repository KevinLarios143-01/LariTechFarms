import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HrDashboardPageHeaderModalComponent } from '../hr-dashboard-page-header-modal/hr-dashboard-page-header-modal.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-hr-dashboard-page-header',
  templateUrl: './hr-dashboard-page-header.component.html',
  styleUrls: ['./hr-dashboard-page-header.component.scss']
})
export class HrDashboardPageHeaderComponent implements OnInit {
  @Input() title!: string;
  model!: NgbDateStruct;
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(HrDashboardPageHeaderModalComponent);
    dialogRef.afterClosed().subscribe(result => { });
  }

  ngOnInit(): void {
  }
  selectedTime = '14:30'; // Formato 24h

  updateTime(event: Event) {
    this.selectedTime = (event.target as HTMLInputElement).value;
  }

  // En tu componente
get displayTime12h(): string {
  if (!this.selectedTime) return '';
  const [hours, minutes] = this.selectedTime.split(':');
  const h = +hours;
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${minutes} ${ampm}`;
}
}

