import { Component } from '@angular/core';
//importamos servicio ropa
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})
export class HomeComponent {
  titulo = 'Pagina Principal';
  listado_ropa:Array<string>
  prenda_a_guardar:string 
  //esto para no usar new -> NO ES RECOMENDABLE
  constructor(private ropaService: RopaService) { }

  ngOnInit(){
  	this.listado_ropa = this.ropaService.getRopa()
  	console.log(this.listado_ropa)
  }

  guardarPrenda(){
  	this.ropaService.addRopa(this.prenda_a_guardar)
  	this.prenda_a_guardar = null
  }

  eliminarPrenda(n:number){
  	this.ropaService.deleteRopa(n)
  }

}
