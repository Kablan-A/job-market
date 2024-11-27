import logo from '@/assets/images/logo.svg';
import type { Employer } from '@/typings';

export const employers: Employer[] = [
  {
    logo: logo,
    name: 'Company 1',
    about: 'about Company 1',
    country: 'Country 1',
    website: 'https://company1.com',
    occupation: ['Occupation 1', 'Occupation 2'],
    vacansies: [
      { title: 'Vacancy 1' },
      { title: 'Vacancy 2' },
      { title: 'Vacancy 3' },
      { title: 'Vacancy 4' },
      { title: 'Vacancy 5' },
    ],
  },
  // Add more employers here...
];
