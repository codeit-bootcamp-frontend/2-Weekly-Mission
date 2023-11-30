import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Shared from '../pages/Shared';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Shared />,
      },
    ],
  },
]);

export default router;
