export type Vacancy = {
  id: string;
  name: string;
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
  id: string;
  logo?: string;
  name: string;
  about?: string;
  country: string;
  website?: string;
  industrySectors: string[];
  vacancies?: Vacancy[];
};

export type Specialty = {
  id: string;
  name: string;
  category?: string; // e.g., "Engineering", "Marketing"
};

export type EmployerSpecialty = {
  employerId: string;
  specialtyId: string;
};

export type VacancySpecialty = {
  vacancyId: string;
  specialtyId: string;
};

export type SearchType = 'employer' | 'vacancy' | 'specialty';

export type SearchResult = {
  type: SearchType;
  id: string; // ID of the related entity (Employer, Vacancy, or Specialty)
  name: string; // Display name
  // additionalInfo?: string; // Optional, e.g., location for employers, or skill category
};
