function PrintToConsole(constructor: Function) {
  console.log(constructor);
}

const printtoConsoleCoinditional = (print: Boolean = false): Function => {
  if (print) {
    return PrintToConsole;
  } else {
    return () => {};
  }
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckRangePokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descpritor: PropertyDescriptor
  ) {
    console.log({ target, propertyKey, descpritor });
    // descpritor.value = () => console.log('l');

    const OriginalMetohd = descpritor.value;
    descpritor.value = (id: number) => {
      if (id < 1 || id > 1008) {
        return console.error("Pokemon id must be a number betwen 1 and 1008");
      } else {
        return OriginalMetohd(id);
      }
    };
  };
}

function readOnlyDecorator(isWriteble: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    console.log({ target, propertyKey });
    const descriptorCreated: PropertyDescriptor = {
      get() {
        console.log(this);

        return;
      },
      set(this, value) {
        console.log(this, value);
        Object.defineProperty(this, propertyKey, {
          value: value,
          writable: !isWriteble,
          enumerable: false,
        });
      },
    };
    return descriptorCreated;
  };
}

@blockPrototype
@printtoConsoleCoinditional(true)
export class Pokemon {
  @readOnlyDecorator()
  public publicApi: string = "https://pokeapi.co/";

  constructor(public name: string) {}

  @CheckRangePokemonId()
  savePokeToPc(id: number) {
    console.log(`Pokemon saved to PC: ${id}`);
  }
}
