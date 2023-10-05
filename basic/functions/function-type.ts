(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hello ${name}`;
  const savior = () => "Saved";

  let myFunction: (x: number, y: number) => number;

  let myFunctiontow: (coso: string) => string;

  let myFunctionthree: () => void;

  //myFunction = 10;
  //--
  myFunction = addNumbers;

  console.log(myFunction(5, 2));
  //--
  myFunctiontow = greet;

  console.log(myFunctiontow("Tony"));
  //--
  myFunctionthree = savior;

  console.log(myFunctionthree());
})();
