(() => {

    abstract class Mutant {
        constructor(
            public name:string,
            public realName:string
        ){

        }

    }

    class Xmen extends Mutant {
        saveWorld() {
            return 'saved';
        }
    }
    class Billian extends Mutant {
        conquerWorld() {
            return 'Done';        }
    }

    //let coso = new Mutant('h', 'h');
    const Pepe: Xmen = new Xmen('hola', 'hola');

    const MAgneto = new Billian('malo', 'maloso');

    console.log(Pepe.saveWorld());
    console.log(MAgneto.conquerWorld());
    
    const PrintName = (character: Mutant) => {
        console.log(character.realName);
        
    }

    PrintName(Pepe);
})()