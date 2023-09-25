(()=> {
const myError = (message: string):never => {
    throw new Error(message)
}

myError('Haaaalp');

})()