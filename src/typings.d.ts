export type Vacancy = {
  title: string;
  // address: {
  //   street: string;
  //   city: string;
  // };
};

export type Employer = {
  logo: string;
  name: string;
  about: string;
  country: string;
  website: string;
  occupation: string[];
  vacansies: Vacancy[];
};
