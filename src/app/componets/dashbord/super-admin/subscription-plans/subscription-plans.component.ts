import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { SuperAdminService } from '../../../../shared/services/super-admin.service';
import { Plan } from '../../../../shared/interfaces/plan';

@Component({
  selector: 'app-subscription-plans',
  standalone: true,
  imports: [SharedModule,NgSelectModule,NgbModule,RouterModule],
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.scss']
})
export class SubscriptionPlansComponent implements OnInit {
  plans: Plan[] = [];

  constructor(
    private modalService: NgbModal,
    private superAdminService: SuperAdminService
  ) { }

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans(): void {
    this.superAdminService.getPlans().subscribe(plans => {
      this.plans = plans;
    });
  }

  deletePlan(id: number): void {
    this.superAdminService.deletePlan(id).subscribe(() => {
      this.loadPlans();
    });
  }

  open(content:any) {
    this.modalService.open(content, { windowClass : 'modalCusSty' })
  }

}
