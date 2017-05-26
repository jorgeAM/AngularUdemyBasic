import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent {
  nombre_componente:string = 'Componente de fruta'
  listado_frutas:string = 'Naranja, Manzana, Pera y Sandia'
  trabajos:Array<any> = ['Informatico', 'Diseñador', 24]

  //constructor
  constructor(){
  	console.log(this.trabajos)
  	//this.holaMundo()
  }

  //llamar metodos sin tener que declararlos en constructor
  ngOnInit(){
  	//this.holaMundo()
  }

  //metodo
  holaMundo(){
  	alert('Hola Mundo')
  }

}
