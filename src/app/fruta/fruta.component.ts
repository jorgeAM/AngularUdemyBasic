import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent {
  nombre_componente = 'Componente de fruta'
  listado_frutas = 'Naranja, Manzana, Pera y Sandia'	
}
