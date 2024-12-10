import { useVacancy } from '@/util/hooks/use-vacancy';
import { Link } from 'react-router-dom';

export function VacancyAbout() {
  const vacancy = useVacancy();

  if (!vacancy) {
    return <h1>Employer not found</h1>;
  }

  return (
    <article>
      <div className="mb-5 flex justify-between">
        <p>{vacancy.employmentType}</p>
        <p>{vacancy.location}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          {vacancy.skillsRequired.map((skill) => (
            <p key={`skill${vacancy.id}`} className="btn btn-info btn-sm">
              {skill}
            </p>
          ))}
        </div>
        <Link
          className="btn btn-ghost btn-sm"
          to={`/employer/${vacancy.employerId}`}
        >
          Employer
        </Link>
      </div>
    </article>
  );
}
