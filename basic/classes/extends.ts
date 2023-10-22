
(() => {
    class Avenger {
        constructor (
            public name: string,
            public realName: string,
        ) {
            console.log("Lammado");
            
        }
        protected getFullName () {
            return this.name + " " + this.realName;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutan: boolean
        ) {
            super(name, realName);
            console.log("Llamado xmen");
        }

        get FullName() {
            return this.name + "-" + this.realName;
        }

        set FullName(namel: string) {
            //i can put any kind of logic in here
            if (namel.length < 3){
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

    console.log(Wolverine.FullName); //al ser un getter no se llama con (), se llama como una property
    
    Wolverine.FullName = 'Alguien';
    console.log(Wolverine.FullName);
    
    
    
})