import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-player',
  //standalone: false,
  imports: [ FormsModule,CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  playerId: string = '';  // Almacena el ID ingresado por el usuario
  player: any = null;  // Almacena los datos del jugador
  errorMessage: string = '';  
  playerData: any = {
    name: '',
    position: '',
    club: '',
    rating: '',
    nationality: '',
    skills: []
  };

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.playerId = this.route.snapshot.paramMap.get('id')!;
  }

  loadPlayerData(): void {
    this.apiService.getPlayer(this.playerId).subscribe((data) => {
      this.playerData = data;
    });
  }

  onSubmit(): void {
    this.apiService.updatePlayerById(this.playerId, this.playerData).subscribe(
      (response) => {
        this.router.navigate(['/players']);
      },
      (error) => {
        console.error('Error al actualizar el jugador', error);
      }
    );
  }
  searchPlayer() {
    if (this.playerId) {
      this.apiService.getPlayer(this.playerId).subscribe(
        (data: any) => {
          if (data) {
            this.player = data;
            this.errorMessage = '';
            console.log('Datos obtenidos:', data);
            this.playerData = {
              name: this.player.long_name,
              position: this.player.player_positions,
              club: this.player.club_name,
              rating: this.player.overall,
              nationality: this.player.nationality_name,
              skills: this.player.skills,
            };
   
          } else {
            this.errorMessage = 'Jugador no encontrado';
            this.player = null;
          }
        },
        (error) => {
          console.error('Error al obtener los datos del jugador:', error);
          this.errorMessage = 'Hubo un error al obtener los datos. Intenta de nuevo más tarde.';
          this.player = null;
        }
      );
    } else {
      this.errorMessage = 'Por favor ingrese un ID de jugador';
    }
  }
}
