import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { NavbarComponent } from './navbar/navbar.component';

import { routes } from './app.routes'; 

import { ChartOptions, ChartType, ChartDataset } from 'chart.js';  
import { ChartData, ChartConfiguration } from 'chart.js'; 

import { Chart } from 'chart.js/auto';
// import { AppRoutingModule } from './app-routing.module'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,CommonModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'Page-principal';
  playerId: string = '';  // Almacena el ID ingresado por el usuario
  player: any = null;  // Almacena los datos del jugador
  errorMessage: string = '';  // Mensaje de error en caso de que no se encuentre el jugador

  public chart: any;
 
}