//modulos que usaremos para peticiones AJAX
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
	url:string

	constructor(private http:Http){
		this.url = "https://jsonplaceholder.typicode.com/posts"
	}

	getPrueba(){
		return 'hola'
	}

	getArticles(){
		return this.http.get(this.url).map(res => res.json())
	}


}