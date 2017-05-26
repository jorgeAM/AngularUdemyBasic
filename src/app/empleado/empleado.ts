export class Empleado{
	/*
	nombre:string
	edad:number
	cargo:string
	contratado:boolean

	constructor(nombre, edad, cargo, contratado){
		this.nombre = nombre
		this.edad = edad
		this.cargo = cargo
		this.contratado = contratado
	}
	*/
	
	//las 2 formas son correctas 
	//MODELO -> importante el public
	constructor(
		public nombre:string,
		public edad:number,
		public cargo:string,
		public contratado:boolean
	){}
	
}