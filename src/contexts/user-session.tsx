import { createContext, FC, ReactNode, useContext, useRef } from 'react';
import { UserSession } from '../models/user-session';

interface IProps {
  children: ReactNode;
}

const UserSessionContext = createContext<UserSession>(null);

export const useUserSession = () => useContext(UserSessionContext);

export const UserSessionProvider: FC<IProps> = ({ children }) => {
  const userSession = useRef(new UserSession()).current;

  return (
    <UserSessionContext.Provider value={ userSession }>
      { children }
    </UserSessionContext.Provider>
  );
};