// Function With Generics
{
  //
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<boolean>(true);

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Jerin",
  });

  // Tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result2 = createArrayWithTuple<string, number>("Bangladesh", 2222);
  const resGeneric2 = createArrayWithTuple<string, { name: string }>(
    "bBangladesh",
    {
      name: "Asia",
    }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "X",
    email: "x@gmail.com",
    devType: " NLWD",
  });
  const student2 = addCourseToStudent({
    name: "Y",
    email: "y@gmail.com",
    devType: "NLWD",
    hasWatch: "Apple watch",
  });
  //
}
