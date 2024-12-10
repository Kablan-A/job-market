import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Hero } from './pages/hero';
import { EmployerPage } from './pages/employer';
import { EmployerAbout } from './components/employer/about';
import { EmployerVacancies } from './components/employer/vacancies';
import { VacancyList } from './components/vacancy/list';
import { EmployerList } from './components/employer/list';
import { SearchPage } from './pages/search';
import { VacancyPage } from './pages/vacancy';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="search" element={<SearchPage />}>
          <Route path="vacancy" element={<VacancyList />} />
          <Route path="employer" element={<EmployerList />} />
        </Route>
        <Route path="vacancy/:id" element={<VacancyPage />} />
        <Route path="employer/:id" element={<EmployerPage />}>
          <Route index element={<EmployerAbout />} />
          <Route path="vacancy" element={<EmployerVacancies />} />
        </Route>
      </Route>
    </Routes>
  );
}
