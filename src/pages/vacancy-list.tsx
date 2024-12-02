import { VacancyCard } from '@/components/vacancy/card';
import { vacancies } from '@/data/vacancies';

export function VacancyList() {
  return (
    <div className="flex flex-col gap-5">
      {vacancies.map((vacancy) => (
        <div key={vacancy.id}>
          <VacancyCard {...vacancy} />
        </div>
      ))}
    </div>
  );
}
