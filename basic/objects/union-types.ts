(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let mycustomvar: (Hero | string | number) = "Coso";
  
  console.log(typeof mycustomvar);

  mycustomvar = 10;

  console.log(typeof mycustomvar);
  
  mycustomvar = {
    name: 'Bruce',
    age: 57,
    powers: ['feliz', 'con plata']
  }

  console.log(mycustomvar);
  

})();
