const user:string = 'John Doe' ;
const suma = (a:number,b:number )=>{
  return a+b;
}
suma(5,5)

class Persona{
  constructor( public age:number,public nombre:string,public apellido:string){
  }
}

const persona = new Persona(25,'John','Doe');
persona.age

