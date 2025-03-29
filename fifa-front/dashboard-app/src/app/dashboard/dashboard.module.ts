import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { ApiService } from '../services/api.service';  

//import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importa el HttpClientModule
import { provideHttpClient } from '@angular/common/http';

import { ChartOptions, ChartType, ChartDataset } from 'chart.js';  
import { BaseChartDirective } from 'ng2-charts';

//import { ChartsModule } from 'ng2-charts';
//import { NgChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Chart } from 'chart.js/auto';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,  // El módulo de enrutamiento se incluye aquí
    DashboardComponent,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }  // Configurar la ruta dentro de este módulo
    ]),
    RouterOutlet,
    DashboardRoutingModule, 
    HttpClientModule,  
 //   BrowserModule,
    //ChartOptions,
    //ChartType,
    //ChartDataset,
    BaseChartDirective,
  //ChartsModule,
    NgxChartsModule,
  //NgChartsModule,
  //Charts,
    BrowserAnimationsModule
  ],
 // exports: [DashboardComponent],
  providers: [ApiService],
//  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
