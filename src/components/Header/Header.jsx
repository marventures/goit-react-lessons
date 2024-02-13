import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        <span role="img" aria-label="computer icon">
          💻
        </span>{' '}
        GoMerch Store
      </p>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          About
        </NavLink>

        <NavLink
          to="products"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
};
