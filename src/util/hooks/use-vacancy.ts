import { vacancies } from '@/data/vacancies';
import { useValidateId } from './use-validate-id';
import type { Vacancy } from '@/typings';

export function useVacancy(): Vacancy | undefined {
  const id = useValidateId(vacancies.length);

  if (id || id === 0) return vacancies[id];
}
