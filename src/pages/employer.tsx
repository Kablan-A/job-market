import { EmployerCard } from '@/components/employer/card';
import { Outlet } from 'react-router-dom';
import { EmployerTabs } from '@/components/employer/tabs';
import { useEmployer } from '@/util/hooks/use-employer';

export function EmployerPage() {
  const employer = useEmployer();

  if (!employer) {
    return <h1>Employer not found</h1>;
  }

  return (
    <section className="flex w-full flex-col gap-5 sm:flex-row md:gap-10">
      <div className="sm:max-w-xs">
        <EmployerCard {...employer} />
      </div>

      <div className="w-full">
        <h2 className="mb-5 text-3xl font-bold text-black md:mb-5">
          {employer.name}
        </h2>

        <EmployerTabs />

        <hr className="my-5 w-full" />

        {/* Tab routes: About company, Vacancies */}
        <Outlet />
      </div>
    </section>
  );
}
