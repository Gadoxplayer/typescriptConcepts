import { getPokemon } from "./generics/getPokemon";

console.log(getPokemon(986));

getPokemon(76)
    .then( res => console.log( res ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('done') );
    