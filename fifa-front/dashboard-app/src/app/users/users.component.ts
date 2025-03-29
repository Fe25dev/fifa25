
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 

// import { AppRoutingModule } from './app-routing.module'; 
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule,CommonModule],

  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {

  title = 'Jugadores Paginados';

 // player: any = null;  // Almacena los datos del jugador
  errorMessage: string = '';  // Mensaje de error en caso de que no se encuentre el jugador
  players: any[] = [];
  totalPlayers: number = 0; // Total de jugadores
  page: number = 1;
  pageSize: number = 15;
  name: string = '';
  club: string = '';
  nacion: string = '';
  format: string = ''; // Puede ser 'csv' o 'xlsx' para exportar
  pages: number[] = []; 
  displayedPlayers: any[] = [];

constructor(private apiService: ApiService) {}

ngOnInit(): void {

  }

  exportToCSV(): void {
    this.format = 'csv';  // Asignar 'csv' al formato
  }

  // Método para manejar la exportación a XLSX
  exportToXLSX(): void {
    this.format = 'xlsx';  // Asignar 'xlsx' al formato
  }

// Obtener jugadores con los filtros aplicados
  getPlayersPage(): void {
    const filters = {
      page: this.page,
      pageSize: this.pageSize,
      name: this.name,
      club: this.club,
      nacion: this.nacion,
      format: this.format || '' 
    };
   
  // Método para manejar el cambio de página
    this.apiService.getPlayersPage(filters).subscribe(
      (response: any) => {
        this.players = response.players;
        this.totalPlayers = response.total; // Total de jugadores
      },
      (error) => {
        console.error('Error al obtener jugadores:', error);
      }
    );
  }

 // Método para manejar el cambio de página
  changePage(pageNumber: number): void {
    this.page = pageNumber;  // Actualizar la página actual
    this.updateDisplayedPlayers();  // Actualizar los jugadores mostrados para la página seleccionada
  }
  // Método para calcular el número total de páginas de manera segura
  get totalPages(): number {
    return Math.ceil(this.totalPlayers / this.pageSize);
  }

  // Actualiza los jugadores mostrados para la página actual
  updateDisplayedPlayers(): void {
    const startIndex = (this.page - 1) * this.pageSize;  // Calcular el índice inicial de los jugadores a mostrar
    this.displayedPlayers = this.players.slice(startIndex, startIndex + this.pageSize);  // Obtener los jugadores para la página actual
  }
}

