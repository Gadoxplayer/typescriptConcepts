(() => {
  const fullName = (
    fisrtname: string,
    lastname?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${fisrtname} ${lastname || "----"}`.toUpperCase();
    } else {
      return `${fisrtname} ${lastname || "----"}`;
    }
  };

  const name = fullName("tony tony", "chomper", true);
})();
