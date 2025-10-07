import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { HomePage } from './HomePage';
import { UserPage } from './UserPage';
import { ShoppingPage } from './ShoppingPage';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '/shopping',
    element: <ShoppingPage />,
  },
  {
    path: '*',
    element: <Navigate to="/home" replace={true} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
