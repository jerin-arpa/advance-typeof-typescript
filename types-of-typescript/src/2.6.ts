// Constraints In Typescript
{
  //
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 38,
    name: "X",
    email: "x@gmail.com",
    devType: " NLWD",
  });

  const student2 = addCourseToStudent({
    id: 74,
    name: "Y",
    email: "y@gmail.com",
    hasWatch: "Apple watch",
  });

  const student3 = addCourseToStudent({
    id: 3874,
    name: "Z",
    email: "z@gmail.com",
    emni: "emni",
  });
  //
}
