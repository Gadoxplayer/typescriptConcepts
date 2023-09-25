(() => {

    const fullName = ( fisrtname: string, lastname?: string ): string => {
        return `${ fisrtname } ${ lastname || 'no lastname' }`;
    }

    const name = fullName('tony tony', 'chomper');
})();