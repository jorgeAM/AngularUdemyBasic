import { Component } from '@angular/core';
//importamos modelo
import { Coches } from './coches';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
})
export class CochesComponent {
  coche:Coches
  coches:Array<Coches>

  constructor(){
    this.coche = new Coches("","","")
    this.coches = [
    	new Coches("Seat Panda","120","Blanco"),
    	new Coches("Renault Clio","120","Azul")
    ]
  }

  onSubmit(){
  	this.coches.push(this.coche)
  	this.coche = new Coches("","","")
  }
}
