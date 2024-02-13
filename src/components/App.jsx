import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage/ProductDetailsPage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { Mission } from './Mission/Mission';
import { Team } from './Team/Team';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* A special index props is passed, which tells the React Router that the route index and must be rendered to the same address as its parent. */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailsPage />} />
      </Route>
    </Routes>
  );
};
