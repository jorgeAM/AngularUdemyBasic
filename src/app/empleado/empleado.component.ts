import { Component } from '@angular/core';
//importamos modelo empleado
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
  titulo:string = 'Informatico'
  //creaos objeto
  emp:Empleado

  constructor(){
    this.emp = new Empleado('Jorge Alfaro', 24, 'informatico', true);
  }
  //metodo ejecutado despues de constructor
  ngOnInit(){
  	console.log(this.emp);
  }
}
