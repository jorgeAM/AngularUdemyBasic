import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent {
  titulo:string
  administrador:boolean

  constructor(){
    this.titulo = "Ejemplo Template"
    this.administrador = true
  }

  cambio(){
    if (this.administrador) {
      this.administrador=false
      console.log(this.administrador)
    }
    else {
      this.administrador=true
      console.log(this.administrador)
    }
  }
}
