export type Vacancy = {
  id?: number;
  title: string;
  description: string;
  location: string;
  employmentType: 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship';
  salaryRange?: [number, number]; // Optional salary range [min, max]
  skillsRequired: string[];
  postedDate: string; // ISO date string
  applicationLink?: string;
  employerId?: id;
};

export type Employer = {
  id?: number;
  logo?: string;
  name: string;
  about?: string;
  country: string;
  website?: string;
  industrySectors: string[];
  vacancies?: Vacancy[];
};
