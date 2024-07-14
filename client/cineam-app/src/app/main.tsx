import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactRouter } from './router.tsx';
import './assets/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { Header } from '@/components/layout/header/header.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={ReactRouter} />
  </React.StrictMode>,
);
