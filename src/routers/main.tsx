import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { useUserSession } from '../contexts/user-session';
import { ComingSoon } from '../screens/ComingSoon';
import { Dashboard } from '../screens/Dashboard';
import { Login } from '../screens/Login';
import { PrivateScreen } from '../screens/PrivateScreen';
import { Signup } from '../screens/Signup';
import { MainRoutes } from './config';

export const MainRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userSession = useUserSession();

  useEffect(() => {
    userSession.authenticate()
      .then(() => {
        if (userSession.isLoggedIn) navigate(MainRoutes.DASHBOARD);
      })
      .catch(() => {
        if (!location.pathname.includes(MainRoutes.SIGNUP)) navigate(MainRoutes.LOGIN);
      });
  }, [userSession]);
  
  return (
    <Routes>
      <Route path={ MainRoutes.SIGNUP } element={ <Signup /> } />
      <Route path={ MainRoutes.LOGIN } element={ <Login /> } />
      <Route path={ MainRoutes.DASHBOARD } element={ <PrivateScreen element={ <Dashboard /> } /> } />
      <Route path='*' element={ <ComingSoon /> } />
    </Routes>
  );
};
