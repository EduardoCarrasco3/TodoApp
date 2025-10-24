import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  welcome = 'Bienvenido 👌';

  tasks = ['Instalar Angular CLI', 
    'Crear Proyecto', 
    'Crear Componente', 
    'Crear Servicio']
}
