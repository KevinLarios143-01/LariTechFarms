import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { ClienteService, Cliente } from '../cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-client',
  standalone: true,
  imports: [SharedModule, NgbModule, NgSelectModule, RouterModule, CommonModule, FormsModule, AngularEditorModule],
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {
  active = 1;
  clientId: string | null = null;
  cliente: Cliente | null = null;
  loading = false;
  error: string | null = null;
  notaContenido = '';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Escriba su nota aquí...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['insertImage', 'insertVideo', 'insertHorizontalRule', 'toggleEditorMode']
    ]
  };

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private cdr: ChangeDetectorRef
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
      next: (response: any) => {
        const data = response?.data?.data || response?.data || response;
        if (data) {
          this.cliente = data;
        } else {
          this.error = 'Error al cargar el cliente';
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Error al cargar el cliente';
        this.loading = false;
        this.cdr.detectChanges();
        console.error('Error:', err);
      }
    });
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'modalCusSty', size: 'lg' })
  }
}
