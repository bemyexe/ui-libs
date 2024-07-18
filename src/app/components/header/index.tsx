import { Link, useLocation } from 'react-router-dom';

import { cn } from '../../../helpers/classNames';

const EXAMPLES = [
  { name: 'tailwind', href: '/tailwind' },
  { name: 'mui', href: '/mui' },
  { name: 'antd', href: '/antd' },
  { name: 'resizable', href: '/resizable' },
];
export const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className="header flex justify-center items-end  text-white font-semibold">
      <nav>
        <ul className="flex gap-3">
          {EXAMPLES.map((example) => (
            <Link to={example.href} key={example.href}>
              <li
                className={cn(
                  'nav',
                  location.pathname.startsWith(example.href) && 'bg-primary'
                )}
              >
                {example.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
