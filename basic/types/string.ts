(()=>{
    const coso: string = 'Batman';
    const coso2: string = "Greenlanter";
    const coso3: string = `Pepito`

    const abc = 123;

    console.log(`I'm ${coso}`, abc);
    
    console.log(coso[10]?.toUpperCase() || `No hay suficientes caracteres en el string ${coso}`);

    
})();