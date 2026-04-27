import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { ToastrService } from 'ngx-toastr';
import { PuestoService } from '../puesto-list/puesto.service';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';

@Component({
  selector: 'app-add-puesto',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, AngularEditorModule],
  templateUrl: './add-puesto.component.html',
  styleUrls: ['./add-puesto.component.scss']
})
export class AddPuestoComponent implements OnInit {
  puestoForm!: FormGroup;
  isLoading = false;
  isEditMode = false;
  puestoId?: number;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Descripción del puesto, responsabilidades, requisitos...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['insertImage', 'insertVideo', 'insertHorizontalRule', 'toggleEditorMode']
    ]
  };

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly puestoService: PuestoService,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.puestoId = parseInt(id);
      this.loadPuesto();
    }
  }

  initForm() {
    this.puestoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: [''],
      salarioBase: ['', [Validators.min(0)]]
    });
  }

  loadPuesto() {
    if (!this.puestoId) return;
    
    this.isLoading = true;
    this.puestoService.getPuestoById(this.puestoId).subscribe({
      next: (response) => {
        if (response.success) {
          this.puestoForm.patchValue({
            nombre: response.data.nombre,
            descripcion: response.data.descripcion || '',
            salarioBase: response.data.salarioBase || ''
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar puesto:', error);
        this.toastr.error('No se pudo cargar el puesto', 'Error');
        this.isLoading = false;
        this.router.navigate(['/dashboard/hrmdashboards/puestos/puesto-list']);
      }
    });
  }

  onSubmit() {
    if (this.puestoForm.valid) {
      this.isLoading = true;
      const formData = this.puestoForm.value;
      
      const observable = this.isEditMode && this.puestoId
        ? this.puestoService.updatePuesto(this.puestoId, formData)
        : this.puestoService.createPuesto(formData);

      observable.subscribe({
        next: (response) => {
          this.toastr.success(
            response.message || `Puesto ${this.isEditMode ? 'actualizado' : 'creado'} exitosamente`,
            'Éxito'
          );
          this.router.navigate(['/dashboard/hrmdashboards/puestos/puesto-list']);
        },
        error: (error) => {
          console.error('Error al guardar puesto:', error);
          const errorMessage = error.error?.error || 'Error desconocido';
          this.toastr.error(`Error al guardar puesto: ${errorMessage}`, 'Error');
          this.isLoading = false;
        }
      });
    } else {
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia');
      this.markFormGroupTouched();
    }
  }

  onCancel() {
    this.router.navigate(['/dashboard/hrmdashboards/puestos/puesto-list']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.puestoForm.controls).forEach(key => {
      const control = this.puestoForm.get(key);
      control?.markAsTouched();
    });
  }
}
