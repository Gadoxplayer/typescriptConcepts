namespace Valdiations {
    export const validateTEx = ( text: string ) => {
        if(text.length > 3) {
            return true;
        } else {
            return false;
        }
    }

    export const validateDAte = ( fecha: Date ): boolean => {
        return ( isNaN(fecha.valueOf()) ) ? false : true;
    }

     
}

console.log( Valdiations.validateTEx('l'));
