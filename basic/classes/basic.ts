(() => {

    class Avenger {
        
        //private name: string;
        //private team: string;
        //public realName?: string;
        static ageAveg: number = 35;
        static getAvgAge() {
            return this.name;
            //will return the name of the class, not the property 'name'
        }

        constructor( 
            private name: string,
            private team: string, 
            public realName?: string,
            ) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
        }

        public biogr() {
            return `${this.name} is part of the ${this.team}`
        }

    }

    const antman: Avenger = new Avenger('Antman', "New Avengers", "Scott Lang");


    console.log(antman);
    console.log(antman.biogr());
    console.log(Avenger.getAvgAge());
    
    
    

})();