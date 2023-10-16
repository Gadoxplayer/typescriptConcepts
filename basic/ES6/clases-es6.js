(() => {
  class Avenger {
    name;
    poiwer;

    constructor(name = "No name", poiwer = 0) {
      this.name = name;
      this.poiwer = poiwer;
    }
  }

  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, poiwer) {
      super(name, poiwer);
      this.flying = true;
    }
  }

  const hulk = new Avenger("Hulk", 9001);

  console.log(hulk);

  const falcon = new FlyingAvenger("Falcon", 5000);

  console.log(falcon.flying);
})();
