import { Tab } from '../tab';

export function EmployerTabs() {
  return (
    <nav>
      <ul className="flex flex-wrap gap-2 text-center text-sm font-medium text-gray-400 sm:flex-nowrap">
        <li className="w-full sm:w-fit">
          <Tab to="">О компании</Tab>
        </li>

        <li className="w-full sm:w-fit">
          <Tab to="vacancies">Вакансии</Tab>
        </li>
      </ul>
    </nav>
  );
}
