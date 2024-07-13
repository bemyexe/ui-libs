import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../router/router';

export const Header = () => {
  return (
    <header className="header flex justify-center items-end  text-white font-semibold">
      <nav>
        <ul className="flex gap-3">
          <Link to={ROUTER_PATH.tailwind}>
            <li className="nav">TAILWIND </li>
          </Link>
          <Link to={ROUTER_PATH.mui}>
            <li className="nav">MAERIAL UI</li>
          </Link>
          <Link to={ROUTER_PATH.antd}>
            <li className="nav">ANT DESIGN </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
