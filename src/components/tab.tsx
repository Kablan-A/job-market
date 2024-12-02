import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

export function Tab({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      role="tab"
      className={`tab origin-center transition-colors duration-200 ${
        match ? 'tab-active' : null
      }`}
      {...props}
    >
      {children}
    </Link>
  );
}
