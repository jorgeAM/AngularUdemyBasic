import { Component } from '@angular/core';
//modulo para router
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
})
export class ContactoComponent {
  titulo = 'Contact Us';
  parametro

  constructor(
  	private _route:ActivatedRoute,
  	private _router:Router
  ){}

  ngOnInit(){
  	this._route.params.forEach((params:Params)=>{
  		this.parametro = params['page']
  		console.log(this.parametro)
  	})
  }
}
