import { NgModule } from '@angular/core';
//
//import { FormsModule } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
  //  FormsModule,
  //  RouterOutlet,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
