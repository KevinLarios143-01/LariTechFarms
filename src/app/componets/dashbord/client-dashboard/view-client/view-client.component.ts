import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AngularEditorModule, AngularEditorConfig } from '@wfpena/angular-wysiwyg';
import { ClienteService, Cliente } from '../cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-client',
  standalone: true,
  imports: [SharedModule, NgbModule, AngularEditorModule, NgSelectModule, RouterModule, CommonModule],
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {
  active = 1;
  clientId: string | null = null;
  cliente: Cliente | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id');
    if (this.clientId) {
      this.loadCliente(+this.clientId);
    }
  }

  loadCliente(id: number): void {
    this.loading = true;
    this.error = null;

    this.clienteService.getClienteById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.cliente = response.data;
        } else {
          this.error = 'Error al cargar el cliente';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar el cliente';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  //Angular Editor
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'modalCusSty', size: 'lg' })
  }


}
