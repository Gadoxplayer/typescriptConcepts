(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }
    
    let flash: Hero = {
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

    let superO: Hero = {
        name: 'Super O',
        age: 25,
        powers: ['kwnoleged']
    }

})()