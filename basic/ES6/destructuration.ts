(() => {

    type Gente = {
        pepe: string;
        pipo: string;
        cosito: string;
        activo: boolean;
        level: number;
    }

    const Coso: Gente = {
        pepe: 'Pepito perte',
        pipo: 'papulopez',
        cosito: 'Coqui',
        activo: true,
        level: 15000
    }

    const { level, pepe } = Coso;

    console.log(level.toFixed(2), pepe.toLowerCase());
    
    const printCoso = ( gente: Gente ) => {
        console.log(gente.pepe);
    }

    printCoso(Coso);

    const printCosoDos = ( { pepe, ...rest }: Gente ) => {
        console.log(pepe, rest);
    }

    printCosoDos(Coso);

    const arrayGente: string[] = ['uno', 'dos', 'tres'];

    const dos = arrayGente[1];

    console.log(dos);

    //
    const [ un, dosq, ] = arrayGente[1];

    console.log({dosq, un});
    
    //
    const moreArr: [string, boolean, number] = ['uno', true, 1.1];

    const [ capi, irin, unnumbero ] = moreArr;

    console.log({ capi, unnumbero, irin });
    

})();