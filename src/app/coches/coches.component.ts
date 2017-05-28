import { Component } from '@angular/core';
//importamos modelo
import { Coches } from './coches';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
})
export class CochesComponent {
  coche:Coches

  constructor(){
    this.coche = new Coches("","","")
  }

  onSubmit(){
  	console.log(this.coche)
  }
}
