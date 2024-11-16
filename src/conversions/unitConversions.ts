const tempConversions = {
  cToF: (c: number) => (c * 9) / 5 + 32, // Celsius to Fahrenheit
  cToK: (c: number) => c + 273.15,
  fToC: (f: number) => ((f - 32) * 5) / 9,
  fToK: (f: number) => ((f - 32) * 5) / 9 + 273.15,
  kToC: (k: number) => k - 273.15,
  kToF: (k: number) => ((k - 273.15) * 9) / 5 + 32,
};

const distanceConversions = {
  kmToMiles: 0.621371,
  milesToKm: 1.60934,
};

const massConversions = {
  kgToLbs: 2.20462,
  lbsToKg: 0.453592,
};

export const convertUnit = (passedValue: string, from: string, to: string) => {
  const value = parseFloat(passedValue);
  switch (`${from}-${to}`) {
    case "C-F":
      return tempConversions.cToF(value);
    case "C-K":
      return tempConversions.cToK(value);
    case "F-C":
      return tempConversions.fToC(value);
    case "F-K":
      return tempConversions.fToK(value);
    case "K-C":
      return tempConversions.kToC(value);
    case "K-F":
      return tempConversions.kToF(value);
    case "km-miles":
      return value * distanceConversions.kmToMiles;
    case "miles-km":
      return value * distanceConversions.milesToKm;
    case "kg-lbs":
      return value * massConversions.kgToLbs;
    case "lbs-kg":
      return value * massConversions.lbsToKg;
  }
};
