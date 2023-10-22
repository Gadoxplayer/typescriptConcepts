"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveWorld() {
            return 'saved';
        }
    }
    class Billian extends Mutant {
        conquerWorld() {
            return 'Done';
        }
    }
    const Pepe = new Xmen('hola', 'hola');
    const MAgneto = new Billian('malo', 'maloso');
    console.log(Pepe.saveWorld());
    console.log(MAgneto.conquerWorld());
    const PrintName = (character) => {
        console.log(character.realName);
    };
    PrintName(Pepe);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        biogr() {
            return `${this.name} is part of the ${this.team}`;
        }
    }
    Avenger.ageAveg = 35;
    const antman = new Avenger('Antman', "New Avengers", "Scott Lang");
    console.log(antman);
    console.log(antman.biogr());
    console.log(Avenger.getAvgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Lammado");
        }
        getFullName() {
            return this.name + " " + this.realName;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutan) {
            super(name, realName);
            this.isMutan = isMutan;
            console.log("Llamado xmen");
        }
        get FullName() {
            return this.name + "-" + this.realName;
        }
        set FullName(namel) {
            if (namel.length < 3) {
                throw new Error("no puede tener menos de 3 letras");
            }
            this.name = namel;
        }
        getFullnameFromHere() {
            console.log(super.getFullName);
        }
    }
    const Wolverine = new Xmen('Logan', 'James', true);
    console.log(Wolverine);
    console.log(Wolverine.FullName);
    Wolverine.FullName = 'Alguien';
    console.log(Wolverine.FullName);
});
//# sourceMappingURL=mymain.js.map