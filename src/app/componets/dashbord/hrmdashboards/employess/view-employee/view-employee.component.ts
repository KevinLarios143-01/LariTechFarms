import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { FlatpickrModule, FlatpickrDefaults } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../../../../../shared/services/empleado.service';
import { Empleado } from '../../../../../shared/interfaces/empleado';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [NgbModule,NgSelectModule,FormsModule,NgCircleProgressModule,SharedModule,FlatpickrModule,ReactiveFormsModule,CommonModule],
  providers:[FlatpickrDefaults],
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  
  model!: NgbDateStruct;
  model1!: NgbDateStruct;
  model2!: NgbDateStruct;

  active = 1;
  currentRate = 3;
  empleado: Empleado | null = null;

  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };

  constructor(
    config: NgbRatingConfig,
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService
  ) {
    config.max = 5;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadEmpleado(+id);
    }
  }

  loadEmpleado(id: number): void {
    this.empleadoService.getEmpleadoById(id).subscribe(empleado => {
      this.empleado = empleado;
    });
  }

  updateEmpleado(): void {
    if (this.empleado) {
      this.empleadoService.updateEmpleado(this.empleado).subscribe(() => {
        // Handle success
      });
    }
  }

}
