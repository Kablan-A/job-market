import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Hero } from './pages/hero';
import { EmployerPage } from './pages/employer';
import { EmployerAbout } from './components/employer/about';
import { EmployerVacancies } from './components/employer/vacancies';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="employer/:id" element={<EmployerPage />}>
          <Route index element={<EmployerAbout />} />
          <Route path="vacancies" element={<EmployerVacancies />} />
        </Route>
      </Route>
    </Routes>
  );
}
