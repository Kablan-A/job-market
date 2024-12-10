import { EmployerCard } from '@/components/employer/card';
import { employers } from '@/data/employers';

export function EmployerList() {
  return (
    <section className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {employers.map((employer) => (
        <div key={employer.id}>
          <EmployerCard {...employer} />
        </div>
      ))}
    </section>
  );
}
