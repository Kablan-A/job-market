import { VacancyAbout } from '@/components/vacancy/about';
import { VacancyCard } from '@/components/vacancy/card';
import { useVacancy } from '@/util/hooks/use-vacancy';

export function VacancyPage() {
  const vacancy = useVacancy();

  if (!vacancy) {
    return (
      <div className="page">
        <h1 className="text-error">Vacancy not found</h1>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="flex w-full flex-col gap-5 md:gap-10">
        <div className="w-full">
          <VacancyCard {...vacancy} />
        </div>

        <VacancyAbout />
      </section>
    </div>
  );
}
