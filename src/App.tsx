import { BrowserRouter } from 'react-router-dom';
import { UserSessionProvider } from './contexts/user-session';
import { MainRouter } from './routers/main';
import { GlobalStyles } from './styles';

export const App = () => {
  return (
    <BrowserRouter>
      <UserSessionProvider>
        <GlobalStyles />
        <MainRouter />
      </UserSessionProvider>
    </BrowserRouter>
  );
};
