import '../../../workaround-cypress-process-issue';
import { MainNav } from '.';
import * as MainNavSelectors from './main-nav-selectors';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from '../../routers/config';

describe('MainNav', () => {
  it('should mount', () => {
    cy.mount((
      <BrowserRouter>
        <MainNav />
      </BrowserRouter>
    ));

    MainNavSelectors.container()
      .within(() => {
        MainNavSelectors.logo()
          .should('have.attr', 'href', MainRoutes.DASHBOARD);
        MainNavSelectors.payBillsLink()
          .should('have.attr', 'href', MainRoutes.PAY_BILLS)
          .within(() => {
            MainNavSelectors.payBillsIcon();
          });
        MainNavSelectors.reportsLink()
          .should('have.attr', 'href', MainRoutes.REPORTS)
          .within(() => {
            MainNavSelectors.reportsIcon();
          });
        MainNavSelectors.userMenu();
      });
  });
});
