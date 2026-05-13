import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./components/app-header/app-header";

@Component({
  selector: 'aplicacion',
  imports: [RouterOutlet, AppHeader],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ppw-angular-practica');

  isLoggedIn = signal(false);

  materias = ['Programación Web', 'Estructura de datos', 'BD'];

}