function PrintToConsole(constructor: Function) {
  console.log(constructor);
}

const printtoConsoleCoinditional = ( print: Boolean = false ): Function => {
  if ( print ) {
    return PrintToConsole;
  } else {
    return () => {}
  }
};

@printtoConsoleCoinditional()
export class Pokemon {
  public publicApi: string = "https://pokeapi.co/";

  constructor(public name: string) {}
}
