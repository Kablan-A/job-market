import { useEmployer } from '@/util/hooks/use-employer';

export function EmployerAbout() {
  const employer = useEmployer();

  if (!employer) {
    return <h1>Employer not found</h1>;
  }

  return (
    <article>
      <p>{employer.about}</p>
    </article>
  );
}
