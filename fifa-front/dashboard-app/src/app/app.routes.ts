import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [];

// const routes: Routes = [
//   {
//     path: 'login',
//     loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
//   }
// ];  para cargar stadalone  con lazyloading debe ser en routes y config.ts