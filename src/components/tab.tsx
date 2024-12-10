import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

export function Tab({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      role="tab"
      aria-disabled={match ? 'true' : 'false'}
      className={`tab transition-colors duration-200 hover:bg-base-300 ${
        match ? 'tab-active pointer-events-none' : null
      }`}
      {...props}
    >
      {children}
    </Link>
  );
}
