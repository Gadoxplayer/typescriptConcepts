export const printObject = ( arg: any) => {
    console.log(arg);
    
}

export function genericfunction<T>( arg: T ) {
    return arg;
}

export const genericFunctionArrow = <T>( arg: T ) => arg;