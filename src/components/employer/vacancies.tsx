import { useEmployer } from '@/util/hooks/use-employer';
import { VacancyCard } from '../vacancy/card';

export function EmployerVacancies() {
  const employer = useEmployer();

  if (!employer) {
    return <h1>Employer not found</h1>;
  } else if (!employer.vacancies) {
    return <h1>No Vacancies</h1>;
  }

  return employer.vacancies.map((vacancy) => (
    <VacancyCard key={vacancy.id} {...vacancy} />
  ));
}
