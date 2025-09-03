import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { EmployeeService } from './employee.service';
import { Empleado, EmpleadoResponse2 } from '../../../../../shared/interfaces/empleado';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [SharedModule,RouterModule,RouterModule,NgSelectModule, AsyncPipe],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [EmployeeService, DecimalPipe]
})
export class EmployeeListComponent implements OnInit {
  // @ViewChildren(SortableHeader) headers!: QueryList<SortableHeader>;

  employeeList$!: Observable<Empleado[]>;
  total$!: Observable<number>;
  loading$!: Observable<boolean>;
  stats$!: Observable<EmpleadoResponse2>;

  constructor(public empleadoService: EmployeeService) {
    this.employeeList$ = empleadoService.employeeData$;
    this.total$ = empleadoService.total$;
    this.loading$ = empleadoService.loading$;
    this.stats$ = empleadoService.getEmployeeStats();
  }

  ngOnInit(): void {
  }


  deleteData(id: number){
    // TODO: Implementar eliminación via API
    console.log('Eliminar empleado:', id);
  }

  get lists() {
    // Mantener compatibilidad con el template
    return [];
  }
}
