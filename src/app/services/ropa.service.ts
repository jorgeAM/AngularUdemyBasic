import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
	nombre_prenda:string = 'Pantalones pitillo'
	
	prueba(nombre_prenda:string){
		return nombre_prenda
	}
}