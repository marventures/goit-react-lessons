import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      {/* Outlet should be used in parent route elements to render their child route elements*/}
      <Outlet />
    </div>
  );
};
