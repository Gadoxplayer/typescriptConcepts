// Crear interfaces

interface superCar {
  encender: boolean,
  velocidadMaxima: number,
  acelear(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: superCar ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: superCar = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface villain {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean
}

const guason: villain = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: villain ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface comicCity {
  (ciudadanos: string[]): number,
}

const ciudadGotica:comicCity = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}



// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface peopleOB {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void
}
class Persona implements peopleOB {

  public nombre: string;
  public edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio() {}

}