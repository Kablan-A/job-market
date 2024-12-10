import { Tab } from '@/components/tab';
import { SearchForm } from '@/components/search/form';

import { Outlet } from 'react-router-dom';

export function SearchPage() {
  return (
    <section className="page">
      <div className="mx-auto mb-5 w-full max-w-lg">
        <nav role="tablist" className="tabs-boxed tabs">
          <Tab to="vacancy">Вакансии</Tab>
          {/* <Tab to="resume">Резюме</Tab> */}
          <Tab to="employer">Компании</Tab>
        </nav>
      </div>

      <div className="mb-3">
        <SearchForm />
      </div>
      <Outlet />
    </section>
  );
}
