import { Route, Routes } from 'react-router';
import { Dashboard } from '../pages/Dashboard';
import { NotFound } from '../pages/NotFound';
import { MainRoutes } from './config';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path={ MainRoutes.DASHBOARD } element={ <Dashboard /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
};
