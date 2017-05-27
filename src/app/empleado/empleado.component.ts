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
  trabajador_externo:boolean

  constructor(){
    this.emp = new Empleado('Jorge Alfaro', 24, 'informatico', true);
    this.trabajador_externo = false
  }
  //metodo ejecutado despues de constructor
  ngOnInit(){
  	console.log(this.emp);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor
  }

}
