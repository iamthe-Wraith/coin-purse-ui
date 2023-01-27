import { observer } from 'mobx-react';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserSession } from '../../contexts/user-session';
import { UserRoles } from '../../models.ts/user';
import { MainRoutes } from '../../routers/config';
import { LoadingScreen } from '../LoadingScreen';

interface IRequirements {
  // an array of the roles that have access to this route
  roles?: UserRoles[];
}

// specific redirects for when a specific requirement fails
interface IRedirect {
  // will be used if the user is not signed in
  authPath?: string;
  // will be used if the user is signed in but does not have a
  // required role
  rolesPath?: string;
}

export interface IPrivatePageProps {
  element: JSX.Element;
  redirect?: string | IRedirect;
  requirements?: IRequirements;
}

export const PrivateScreenBase: FC<IPrivatePageProps> = ({
  element,
  redirect = MainRoutes.LOGIN,
  requirements = {},
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const userSession = useUserSession();
  const [requirementsMet, setRequirementsMet] = useState(false);
  const [redirectTo, setRedirectTo] = useState('');

  useEffect(() => {
    if (redirectTo) {
      if (redirectTo.includes('http')) {
        window.location.href = redirectTo;
      } else {
        navigate(redirectTo);
      }
    }
  }, [redirectTo]);

  useEffect(() => {
    setRequirementsMet(false);
  }, [pathname]);

  const checkRequirements = () => {
    let requirementsMet = true;
    let _redirectTo = '';

    // if (process.env.NODE_ENV === 'development') return requirementsMet;
 
    // user has to be logged in
    if (!userSession.isLoggedIn) {
      requirementsMet = false;
      _redirectTo = typeof redirect === 'string' ? redirect : redirect.authPath;
    }

    // if any required roles are specified, check that the
    // user's role is listed
    if (
      requirementsMet
      && !!requirements.roles?.length
      && !requirements.roles.find(r => r === userSession.user.role)
    ) {
      requirementsMet = false;
      _redirectTo = typeof redirect === 'string' ? redirect : redirect.rolesPath;
    }

    if (_redirectTo) {
      if (typeof _redirectTo !== 'string') throw new Error(`Invalid redirect path found: ${_redirectTo}`);

      setRedirectTo(_redirectTo);
    }

    return requirementsMet;
  };

  useEffect(() => {
    if (
      !!userSession?.user
      && !userSession.loading
    ) {
      if (checkRequirements()) setRequirementsMet(true);
    }
  }, [
    requirementsMet,
    userSession.user, 
    userSession.loading, 
    userSession.isLoggedIn,
  ]);

  return requirementsMet ? element : <LoadingScreen />;
};

export const PrivateScreen = observer(PrivateScreenBase);