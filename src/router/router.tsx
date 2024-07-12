import { createBrowserRouter } from 'react-router-dom';
import { App } from '../app';

export const ROUTER_PATH = {
  app: '/',
};

export const router = createBrowserRouter([
  {
    path: ROUTER_PATH.app,
    element: <App />,
  },
]);
