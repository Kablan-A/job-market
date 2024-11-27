import Nav from './nav';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header className="border-gray-200 bg-white dark:bg-gray-900">
        <Nav />
      </header>
      <main className="max-w mx-auto p-5">
        <Outlet />
      </main>
    </>
  );
}
