import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Folder from '../pages/Folder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/folder',
        element: <Folder />,
      },
    ],
  },
]);

export default router;
