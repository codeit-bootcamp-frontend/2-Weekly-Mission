import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Shared from '../pages/Shared';
import Folder from '../pages/Folder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/shared',
        element: <Shared />,
      },
      {
        path: '/folder',
        element: <Folder />,
      },
    ],
  },
]);

export default router;
