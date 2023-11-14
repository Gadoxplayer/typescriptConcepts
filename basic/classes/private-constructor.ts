(() => {
  class Apocalips {

    static instance: Apocalips;

    private constructor( public name: string ) {

    }

    static CallApocalips(): Apocalips {
        if(!this.instance) {
            Apocalips.instance = new Apocalips('hi');
        }

        return Apocalips.instance;
    }

    changeName(newName: string): void {
        this.name = newName;
    }

  }

  const apocalipsisone = Apocalips.CallApocalips();
  const apocalipsistwo = Apocalips.CallApocalips();
  apocalipsisone.changeName('hiteher');
  
//   const apocapOne = new Apocalips('Hello');

//   console.log(apocapOne);
  

})();
