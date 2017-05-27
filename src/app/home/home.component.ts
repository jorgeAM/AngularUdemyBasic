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
  //esto para no usar new -> NO ES RECOMENDABLE
  constructor(private ropaService: RopaService) { }

  ngOnInit(){
  	console.log(this.ropaService.prueba('Estoy calato'))
  }

}
