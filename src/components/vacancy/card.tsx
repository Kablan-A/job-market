import { Link } from 'react-router-dom';
import { employers } from '@/data/employers';
import type { Vacancy } from '@/typings';

interface VacancyCardProps extends Vacancy {}

export function VacancyCard({
  id,
  title,
  salaryRange = [0, 0],
  location,
  employerId,
}: VacancyCardProps) {
  const [minSalary, maxSalary] = salaryRange;

  return (
    <div className="card bg-base-300 shadow-xl transition-colors hover:bg-base-200">
      <Link to={`/vacancy/${id}`}>
        <div className="card-body">
          <h5 className="card-title mb-3 text-3xl">{title}</h5>
          <p className="text-xl font-normal text-secondary sm:text-2xl">
            <span className="tracking-wider">
              {minSalary} - {maxSalary}₸
            </span>{' '}
            на руки
          </p>

          <p className="font-normal">{employers[employerId].name}</p>
          <p className="font-norma mb-5">{location}</p>
          <div className="card-actions">
            <button className="btn btn-outline btn-primary w-full">
              Откликнуться
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
