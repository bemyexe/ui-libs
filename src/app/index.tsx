import { Outlet } from 'react-router-dom';

import { Header } from './components/header';

export const Root = () => {
  return (
    <div className="bg-sky-200">
      <Header />
      <Outlet />
    </div>
  );
};
