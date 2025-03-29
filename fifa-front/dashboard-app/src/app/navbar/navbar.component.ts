import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}  // Inyecta el servicio Router

  navigateTo(route: string,event: Event): void {
    event.preventDefault(); // Evita que el enlace recargue la página
    this.router.navigate([route]); 
  }
}