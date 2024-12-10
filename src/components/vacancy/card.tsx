import { Link } from 'react-router-dom';
import { employers } from '@/data/employers';
import type { Vacancy } from '@/typings';

interface VacancyCardProps extends Vacancy {}

export function VacancyCard({
  id,
  name,
  salaryRange = [0, 0],
  location,
  employerId,
}: VacancyCardProps) {
  const [minSalary, maxSalary] = salaryRange;

  return (
    <div className="card border shadow-xl transition-all hover:scale-[0.98]">
      <Link to={`/vacancy/${id}`}>
        <div className="card-body">
          <h5 className="card-title text-3xl">{name}</h5>

          <div className="divider m-0"></div>

          <p className="text-xl font-normal text-secondary sm:text-2xl">
            <span className="tracking-wider">
              {minSalary} - {maxSalary}$
            </span>{' '}
            на руки
          </p>
          <p className="font-normal">{employers[employerId].name}</p>
          <p className="font-norma mb-5">{location}</p>

          <div className="card-actions justify-start">
            <button className="btn btn-outline btn-primary">
              Откликнуться
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
