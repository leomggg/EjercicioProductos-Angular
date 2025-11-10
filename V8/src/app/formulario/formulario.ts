import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css'],
})
export class Formulario {
  formulario: FormGroup;

  @Output() enviado = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(6)]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      terminos: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.value);
      this.enviado.emit(true);
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
