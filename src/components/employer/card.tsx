import type { Employer } from '@/typings';
import { Link } from 'react-router-dom';

export function EmployerCard({
  logo,
  name,
  country,
  website,
  occupation,
  vacansies,
}: Employer) {
  return (
    <div className="flex h-fit flex-col gap-8 rounded-md border p-5 shadow-sm">
      <div className="flex sm:flex-col">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-full min-w-9 rounded-md"
        />
        <div className="flex flex-col gap-3">
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
          <p className="">{country}</p>
          <p>Сфера деятельности: {occupation.join(', ')}</p>
        </div>
      </div>

      <Link to="vacancies" className="btn bg-green-500 text-white">
        {vacansies.length} активных вакансий
      </Link>
    </div>
  );
}
