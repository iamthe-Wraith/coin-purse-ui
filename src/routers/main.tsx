import { Route, Routes } from 'react-router';
import { ComingSoon } from '../screens/ComingSoon';
import { MainRoutes } from './config';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path={ MainRoutes.DASHBOARD } element={ <ComingSoon /> } />
      <Route path='*' element={ <ComingSoon /> } />
    </Routes>
  );
};
