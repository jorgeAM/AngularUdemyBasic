import { Component } from '@angular/core';
//importamos modelo
import { Coches } from './coches';
//importamos services
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})
export class CochesComponent {
  coche:Coches
  coches:Array<Coches>
  articles

  constructor(private peticionesService:PeticionesService){
    this.coche = new Coches("","","")
    this.coches = [
    	new Coches("Seat Panda","120","Blanco"),
    	new Coches("Renault Clio","120","Azul")
    ]
  }

  ngOnInit(){
    this.peticionesService.getArticles().subscribe(
      result => {
        this.articles = result
        if(!this.articles) console.log('ERROR')
      },
      err => {
        console.log(err)
      }
    )
  }

  onSubmit(){
  	this.coches.push(this.coche)
  	this.coche = new Coches("","","")
  }
}
