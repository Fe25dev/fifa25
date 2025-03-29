import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { ApiService } from '../services/api.service'; 
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReportsComponent,
    RouterModule, 
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
