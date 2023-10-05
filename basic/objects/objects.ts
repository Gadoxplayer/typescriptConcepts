(() => {

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'pepe',
        age: 24,
        powers: ['fast', 'timetravel']
    }

    flash = {
        name: 'pepite',
        //age: 25,
        powers: ['nada'],
        getName () {
           return this.name;       
        }
    }

    let superO: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Super O',
        age: 25,
        powers: ['kwnoleged']
    }


})()