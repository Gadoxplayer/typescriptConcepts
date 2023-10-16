(() => {
  type genteUnoType = {
    name: string;
    weapon: string;
  };

  const supers: genteUnoType = {
    name: "Any",
    weapon: "Pistlo.",
  };
  const supersun: genteUnoType = {
    name: "N34",
    weapon: "knife.",
  };
  const supersdo: genteUnoType = {
    name: "Anytr",
    weapon: "Pistolas.",
  };

  const muchaGente: genteUnoType[] = [supers, supersun, supersdo];

  for (const unaPerson of muchaGente) {
    console.log(unaPerson.name, unaPerson.weapon);
  }
  
})();
