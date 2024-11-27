import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

export function Tab({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link to={to} className={`tab ${match ? 'active' : null}`} {...props}>
        {children}
      </Link>
    </div>
  );
}
