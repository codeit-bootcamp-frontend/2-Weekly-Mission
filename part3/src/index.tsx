import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>,
  document.getElementById('root')
);
