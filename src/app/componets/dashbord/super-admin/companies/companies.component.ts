import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal, NgbModule, NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SuperAdminService, Company } from '../../../../shared/services/super-admin.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [SharedModule,NgSelectModule,MaterialModuleModule,NgbModule,RouterModule,HttpClientModule],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'CompanyName', 'Email', 'Package', 'RegisterDate', 'Status', 'Action'];
  dataSource = new MatTableDataSource<Company>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private modalService: NgbModal,
    private offcanvasService: NgbOffcanvas,
    private superAdminService: SuperAdminService
  ) {}


  openOffcanvas(content: any): NgbOffcanvasRef | null {
    try {
      return this.offcanvasService.open(content, { 
        ariaLabelledBy: 'offcanvas-basic-title',
        position: 'end',
        panelClass: 'company-details'
      });
    } catch (error) {
      console.error('Error opening offcanvas:', error);
      return null;
    }
  }
  ngOnInit(): void {
    this.loadCompanies();
  }

  private loadCompanies(): void {
    this.superAdminService.getCompanies().subscribe(companies => {
      this.dataSource.data = companies;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  removeData(item: number): void {
    this.superAdminService.deleteCompany(item).subscribe(success => {
      if (success) {
        const index = this.dataSource.data.findIndex(el => el.id === item);
        if (index > -1) {
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription();
        }
      }
    });
  }
  edit(editContent:any) {
    this.modalService.open(editContent, { windowClass : 'modalCusSty',size:'lg' })
  }
  change(changeContent:any) {
    this.modalService.open(changeContent, {windowClass : 'modalCusSty' })
  }

  open(content:any) {
    this.modalService.open(content, {windowClass : 'modalCusSty',size:'lg' })
  }

}
