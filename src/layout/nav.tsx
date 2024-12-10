import * as React from 'react';
import { Link } from 'react-router-dom';

export const navLinks = [
  { to: '/search/vacancy', txt: 'Vacancies' },
  { to: '/search/employer', txt: 'Employers' },
];

export const MobileNav = React.memo(() => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow"
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.to} aria-current="page" className="text-lg">
              {link.txt}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export const Nav = React.memo(() => {
  return (
    <nav className="max-w navbar">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl">
          Jobs
        </Link>
      </div>
      <div className="flex-none md:hidden">
        <MobileNav />
      </div>

      <div className="hidden flex-none md:block" id="navbar-default">
        <ul className="menu menu-horizontal menu-sm">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                aria-current="page"
                className="btn btn-ghost text-lg font-normal"
              >
                {link.txt}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});
