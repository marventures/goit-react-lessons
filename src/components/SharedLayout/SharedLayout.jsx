import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />

      <Suspense fallback={<div>Loading page...</div>}>
        {/* Outlet should be used in parent route elements to render their child route elements*/}
        <Outlet />
      </Suspense>
    </div>
  );
};
