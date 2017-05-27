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
  trabajadores:Array<Empleado>
  trabajador_externo:boolean

  constructor(){
    this.emp = new Empleado('Jorge Alfaro', 24, 'informatico', true);
    this.trabajadores = [
      new Empleado('Panchito Pistolas', 63, 'juvilado', false),
      new Empleado('Anibal Smith', 22, 'enfermera', true),
      new Empleado('Pelón', 7, 'pendejo', false),
      new Empleado('Chicha Negrita', 54, 'profesora', true)
    ]
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
