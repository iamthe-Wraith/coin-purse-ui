import { Route, Routes } from 'react-router';
import { ComingSoon } from '../pages/ComingSoon';
import { MainRoutes } from './config';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path={ MainRoutes.DASHBOARD } element={ <ComingSoon /> } />
      <Route path='*' element={ <ComingSoon /> } />
    </Routes>
  );
};
