import { useEmployer } from '@/util/hooks/use-employer';

export function EmployerVacancies() {
  const employer = useEmployer();

  if (!employer) {
    return <h1>Employer not found</h1>;
  }

  return (
    <div>
      <h1 className="mb-5 text-xl font-semibold">Вакансии компании</h1>
      {employer.vacansies.map((vacancy) => (
        <div key={vacancy.title}>
          <h2>{vacancy.title}</h2>
        </div>
      ))}
    </div>
  );
}
