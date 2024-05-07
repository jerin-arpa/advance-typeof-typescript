// Asynchronous Typescript
{
  // Promise
  // Simulate
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // Calling create promise function
  const showData = async (): Promise<string> => {
    const data = await createPromise();
    return data;
    // console.log(data);
  };

  showData();
  //
}
