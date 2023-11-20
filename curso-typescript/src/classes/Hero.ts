import powers from "../data/powers";

export class Hero {
    constructor(
        public name: string,
        public powerID: number,
        public age: number
    ) { }

    get power() {
        return powers.find( power => power.id === this.powerID )?.desc || 'not found';
    }
}

export class HeroUno {}
export class hEROdOS {}