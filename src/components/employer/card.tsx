import type { Employer } from '@/typings';
import { Link } from 'react-router-dom';

interface EmployerCardProps extends Employer {}

export function EmployerCard({
  logo,
  name,
  country,
  website,
  industrySectors,
  vacancies = [],
}: EmployerCardProps) {
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img src={logo} alt={`${name} logo`} className="h-full w-full" />
      </figure>

      <div className="card-body">
        <p className="card-title mb-3 text-3xl sm:hidden">{name}</p>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover link link-secondary transition-all"
        >
          {website}
        </a>
        <p>
          <span className="font-bold">Сфера деятельности:</span>{' '}
          {industrySectors.join(', ')}
        </p>
        <p className="mb-5">
          <span className="font-bold">Страна:</span> {country}
        </p>
        <div className="card-actions">
          <Link to="vacancy" className="btn btn-primary w-full text-white">
            {vacancies.length} активных вакансий
          </Link>
        </div>
      </div>
    </div>
  );
}
