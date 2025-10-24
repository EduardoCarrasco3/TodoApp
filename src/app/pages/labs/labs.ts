import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {
  welcome = 'Bienvenido 👌';

  tasks = ['Instalar Angular CLI', 
    'Crear Proyecto', 
    'Crear Componente', 
    'Crear Servicio'
  ]
  name = signal('Eduardo');
  age = 24;
  diasbled = true;
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/1200px-Spider-Man.jpg";
  person = {
    name: 'Eduardo',
    age: '18',
    avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/1200px-Spider-Man.jpg' 
  }
  clickHandler(){
    alert('Hola!');
  }
  inputHandler(event: Event){
    console.log(event);
  }
  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
