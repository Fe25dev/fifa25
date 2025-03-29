import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
// import { routes } from './app.routes';  

//const routes: Routes = [];
const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full' },  
    { path: '', component:AppComponent, pathMatch: 'full' },  
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  //{ path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
    //{ path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
    { path: 'users', component: UsersComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
