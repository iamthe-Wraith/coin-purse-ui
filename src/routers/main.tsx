import { Route, Routes } from 'react-router';
import { ComingSoon } from '../screens/ComingSoon';
import { Login } from '../screens/Login/indext';
import { Signup } from '../screens/Signup';
import { MainRoutes } from './config';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path={ MainRoutes.SIGNUP } element={ <Signup /> } />
      <Route path={ MainRoutes.LOGIN } element={ <Login /> } />
      <Route path={ MainRoutes.DASHBOARD } element={ <ComingSoon /> } />
      <Route path='*' element={ <ComingSoon /> } />
    </Routes>
  );
};
