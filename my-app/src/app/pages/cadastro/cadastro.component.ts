import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class CadastroComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    id: '',
    nome: [null, Validators.required],
    email: [null, Validators.required],
    telefone: [null, Validators.required],
    senha: [null, Validators.required],
  });

  hasUnitNumber = false;

  onSubmit(): void {
    alert('Thanks!');
  }
}
