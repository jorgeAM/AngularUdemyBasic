import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
	nombre_prenda:string = 'Pantalones pitillo'
	coleccion_ropa = ['jeans azul', 'polo blanco']

	prueba(nombre_prenda:string){
		return nombre_prenda
	}

	addRopa(coleccion_ropa:string):Array<string>{
		//agregamos al array
		this.coleccion_ropa.push(coleccion_ropa)
		return this.getRopa()
	}

	deleteRopa(index:number){
		this.coleccion_ropa.splice(index, 1)
		return this.getRopa()
	}

	getRopa(){
		return this.coleccion_ropa;
	}
}