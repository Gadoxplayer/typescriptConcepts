"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    console.log('let');
})();
(() => {
    const fullName = (fisrtname, lastname, upper = false) => {
        if (upper) {
            return `${fisrtname} ${lastname || "----"}`.toUpperCase();
        }
        else {
            return `${fisrtname} ${lastname || "----"}`;
        }
    };
    const name = fullName("tony tony", "chomper", true);
})();
(() => {
    const fullName = (fisrtname, lastname) => {
        return `${fisrtname} ${lastname || 'no lastname'}`;
    };
    const name = fullName('tony tony', 'chomper');
})();
(() => {
    const fullName = (fisrtname, lastname) => {
        return `${fisrtname} ${lastname}`;
    };
    const name = fullName('tony', 'chomper');
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'J', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const savior = () => "Saved";
    let myFunction;
    let myFunctiontow;
    let myFunctionthree;
    myFunction = addNumbers;
    console.log(myFunction(5, 2));
    myFunctiontow = greet;
    console.log(myFunctiontow("Tony"));
    myFunctionthree = savior;
    console.log(myFunctionthree());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activableSuignal = () => {
        return 'Signal activated!';
    };
    const heroname = returnName();
})();
(() => {
    let flash = {
        name: 'pepe',
        age: 24,
        powers: ['fast', 'timetravel']
    };
    flash = {
        name: 'pepite',
        powers: ['nada'],
        getName() {
            return this.name;
        }
    };
    let superO = {
        name: 'Super O',
        age: 25,
        powers: ['kwnoleged']
    };
})();
(() => {
    let flash = {
        name: 'pepe',
        age: 24,
        powers: ['fast', 'timetravel']
    };
    flash = {
        name: 'pepite',
        powers: ['nada'],
        getName() {
            return this.name;
        }
    };
    let superO = {
        name: 'Super O',
        age: 25,
        powers: ['kwnoleged']
    };
})();
(() => {
    let mycustomvar = "Coso";
    console.log(typeof mycustomvar);
    mycustomvar = 10;
    console.log(typeof mycustomvar);
    mycustomvar = {
        name: 'Bruce',
        age: 57,
        powers: ['feliz', 'con plata']
    };
    console.log(mycustomvar);
})();
(() => {
    let average = 123;
    let coso;
})();
(() => {
    const numbers = [1, 2, 3, '14'];
    numbers.push('11');
    console.log(numbers);
    const villians = ['pepe', 'pepito'];
    numbers.forEach(n => console.log(n));
})();
(() => {
    let isHero = true;
    let isVillain;
    console.log({ isHero });
    isHero = true && false;
    console.log(isHero);
})();
(() => {
    let AudiolevelEnum;
    (function (AudiolevelEnum) {
        AudiolevelEnum[AudiolevelEnum["min"] = 1] = "min";
        AudiolevelEnum[AudiolevelEnum["med"] = 5] = "med";
        AudiolevelEnum[AudiolevelEnum["max"] = 10] = "max";
    })(AudiolevelEnum || (AudiolevelEnum = {}));
    let level = AudiolevelEnum.med;
    console.log(level);
    console.log({ level });
    console.log(AudiolevelEnum);
})();
(() => {
    const myError = (message) => {
        throw new Error(message);
    };
    myError('Haaaalp');
})();
(() => {
    let nada = undefined;
    let nadita = undefined;
    let nullCoso = null;
});
(() => {
    let coso;
    console.log(coso);
    const villains = 20;
})();
(() => {
    var _a;
    const coso = 'Batman';
    const coso2 = "Greenlanter";
    const coso3 = `Pepito`;
    const abc = 123;
    console.log(`I'm ${coso}`, abc);
    console.log(((_a = coso[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || `No hay suficientes caracteres en el string ${coso}`);
})();
(() => {
    const coso = ['pepe', 25];
    coso[1] = 50;
    coso[0] = 'Don coso';
    const cosos = ['pepe', 25, false];
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=mymain.js.map