(() => {

    interface client {
        name: string,
        age?: number,
        address: Address;
        getFullAddress( id: string ): string | number;
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const pesonone: client = {
        name: 'fer',
        age: 25,
        address: {
            id: 12,
            zip: 'kkkkk',
            city: 'Coso'
        },
        getFullAddress( id: string ): string | number {
            return this.address.id;
        }
    }

    const personTwo: client = {
        name: 'FGe',
        age: 54,
        address: {
            id: 12,
            zip: 'kkkkk',
            city: 'Coso'
        },
        getFullAddress( ) {
            return this.address.id;
        }
    }

    //const clientone = new client();

})()