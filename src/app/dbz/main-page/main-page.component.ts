import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {
  // personajes:Personaje[] = [];
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 3500
  }
  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }
  // agregarNuevoPersonaje(arg: Personaje){
  //   this.personajes.push(arg);
  // }
  constructor(private dbzService: DbzService){
    // this.personajes = this.dbzService.personajes;
  }
}
