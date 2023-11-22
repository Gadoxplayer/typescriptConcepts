import { getPokemon } from "./generics/getPokemon";

console.log(getPokemon(986));

getPokemon(764)
    .then( res => console.log( res.name ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('done') );
    