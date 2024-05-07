// Generic With Interface
{
  //
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmailabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmailabWatch> = {
    name: "Ismat",
    computer: {
      brand: "HP",
      model: "X-25UR",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface Watch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<Watch, YamahaBike> = {
    name: "Jerin",
    computer: {
      brand: "HP",
      model: "X-25UR",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
