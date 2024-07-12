import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/view';
import { Auth } from '@/pages/auth/view';
import { Profile } from '@/pages/profile/view';
import { Tickets } from '@/pages/tickets/view';
import { RedirectToHome } from '@/utils/helpers/redirectToHomePage';

export const ReactRouter = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
  {
    element: (
      <RedirectToHome>
        <Auth />
      </RedirectToHome>
    ),
    path: '/auth',
  },
  {
    element: <Profile />,
    path: '/profile',
  },
  {
    element: <Tickets />,
    path: '/tickets',
  },
]);
