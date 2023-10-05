//type objects

type objectsTypeCar = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void
}


// Objetos
const batimovil: objectsTypeCar = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: objectsTypeCar = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type villanosType = {
  nombre: string,
  edad: number | undefined,
  mutante: boolean,
}

// Villanos debe de ser un arreglo de objetos personalizados
const villanos: villanosType[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type profCharles = {
  poder: string,
  estatura: number
}

const charles: profCharles = {
  poder:"psiquico",
  estatura: 1.78
};

type apocalipsistype = {
  lider: boolean,
  miembros: string[]
}

const apocalipsis: apocalipsistype = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: profCharles | apocalipsistype;

mystique = charles;
mystique = apocalipsis;
