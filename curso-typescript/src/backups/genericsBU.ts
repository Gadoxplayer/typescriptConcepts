// import { Hero as NickHero, HeroUno } from "./classes/Hero";
// import powers from "./data/powers";
// //import * as NickHeroClasses from "./classes/Hero";

import { genericFunctionArrow } from "../generics/generics";
// import { Hero } from "./interfaces/heros";
// import { Villains } from "./interfaces/villains";
import { Villains, Hero } from "../interfaces";


// console.log('Hola Mundo!');

// const Hero = 123;

// //using an alias
// const ironMan = new NickHero('Coso', 'coso', 1);
// //const ironMan = new NickHeroClasses.Hero('Coso', 'coso', 1);
// console.log({ironMan});

// console.log( powers[0] );



// import { printObject, genericfunction } from "./generics/generics";

// printObject('s');
// printObject(125);
// printObject({1:1,2:1,3:1,4:1});
// printObject([1,2,3,4])

// console.log( genericfunction(0.07132).toFixed(3) );
// console.log( genericfunction("hoela sd").toUpperCase() );
// console.log( genericfunction(new Date()).getDate() );

const deadPool={
    name: 'Deadpool',
    realName: 'Wade',
    dangerLevel: 1000
}

console.log(genericFunctionArrow<Hero>(deadPool).realName);
console.log(genericFunctionArrow<Villains>(deadPool).dangerLevel);

