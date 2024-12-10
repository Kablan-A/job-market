import { Nav } from './nav';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-base-200">
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
