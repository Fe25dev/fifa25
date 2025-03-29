import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; 
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  
  selector: 'app-reports',
  //standalone: false,
  imports: [FormsModule,CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  player = {
    name: '',
    age: null,
    team: ''
  };
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) { }

  onSubmit() {
    // Llamar al servicio para crear el jugador
    this.apiService.createPlayer(this.player).subscribe(
      (response) => {
        this.successMessage = 'Jugador creado con éxito';
        this.errorMessage = null;  // Limpiar mensaje de error si la creación fue exitosa
        // Limpiar el formulario después de la creación
        this.player = { name: '', age: null, team: '' };
      },
      (error) => {
        this.errorMessage = 'Hubo un error al crear el jugador';
        this.successMessage = null;  // Limpiar mensaje de éxito si hubo error
      }
    );
  }
}
