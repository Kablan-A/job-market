import { useEmployer } from '@/util/hooks/use-employer';
import { EmployerCard } from '@/components/employer/card';
import { Tab } from '@/components/tab';
import { Outlet } from 'react-router-dom';

export function EmployerPage() {
  const employer = useEmployer();

  if (!employer) {
    return <h1>Employer not found</h1>;
  }

  return (
    <section className="flex w-full flex-col gap-7 sm:flex-row md:gap-10">
      <div className="w-full max-w-xs">
        <EmployerCard {...employer} />
      </div>

      <div className="w-full">
        <h2 className="mb-5 hidden text-4xl sm:block">{employer.name}</h2>

        <nav role="tablist" className="tabs-boxed tabs">
          <Tab to="">О компании</Tab>

          <Tab to="vacancy">Вакансии</Tab>
        </nav>

        <div className="divider"></div>

        {/* Tab routes: About company, Vacancies */}
        <Outlet />
      </div>
    </section>
  );
}
