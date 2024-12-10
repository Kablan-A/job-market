import { EmployerSpecialty, Specialty, VacancySpecialty } from '@/typings';

export const specialties: Specialty[] = [
  { id: '1', name: 'Software Engineering' },
  { id: '2', name: 'Data Science' },
];

export const employerSpecialties: EmployerSpecialty[] = [
  { employerId: '12345', specialtyId: '1' },
];

export const vacancySpecialties: VacancySpecialty[] = [
  { vacancyId: '54321', specialtyId: '2' },
];
