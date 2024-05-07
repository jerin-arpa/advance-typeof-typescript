// Constraint Using KeyOf
{
  //
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //Manually

  type Owner2 = keyof Vehicle;

  const person1: Owner = "car";
  const person2: Owner2 = "car";

  const user = {
    name: "Ismat",
    age: 23,
    address: "Sylhet",
  };

  const car = {
    model: "Toyota 100",
    year: 2000,
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result = getPropertyValue(car, "model");

  //
}
