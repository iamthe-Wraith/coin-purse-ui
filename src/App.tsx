import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './routers/main';
import { GlobalStyles } from './styles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MainRouter />
    </BrowserRouter>
  );
};
