import { createBrowserRouter } from 'react-router-dom';

import { Root } from '../app';
import { AntDesPage } from '../app/pages/antD-page';
import { MuiPage } from '../app/pages/mui-page';
import { TailWindPage } from '../app/pages/tailwind-page';

export const ROUTER_PATH = {
  app: '/',
  tailwind: 'tailwind',
  mui: 'mui',
  antd: 'antd',
};

export const router = createBrowserRouter([
  {
    path: ROUTER_PATH.app,
    element: <Root />,
    children: [
      { path: ROUTER_PATH.tailwind, element: <TailWindPage /> },
      { path: ROUTER_PATH.mui, element: <MuiPage /> },
      { path: ROUTER_PATH.antd, element: <AntDesPage /> },
    ],
  },
]);
