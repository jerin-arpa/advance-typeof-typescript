// Generics Type
{
  //

  type GenericArray<T> = Array<T>;

  // const rollNumber: number[] = [3, 6, 8];
  const rollNumber: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["x", "y", "z"];
  const mentors: GenericArray<string> = ["x", "y", "z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  // Generics array of object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Jerin",
      age: 23,
    },
    {
      name: "Arpa",
      age: 23,
    },
  ];

  // Generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manus: GenericTuple<string, string> = ["X", "Y"];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Jerin", email: "jerin@gmail.com" },
  ];

  //
}
