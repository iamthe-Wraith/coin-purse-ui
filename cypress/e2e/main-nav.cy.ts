import { MainRoutes } from '../../src/routers/config';
import * as MainNavSelectors from '../../src/components/MainNav/main-nav-selectors';

describe('MainNav', () => {
  it('should not display on the Login screen', () => {
    window.localStorage.clear();
    cy.visit(MainRoutes.LOGIN);

    MainNavSelectors.container().should('not.exist');
  });

  it('should not display on the Signup screen', () => {
    window.localStorage.clear();
    cy.visit(MainRoutes.SIGNUP);

    MainNavSelectors.container().should('not.exist');
  });

  it('on 6 pages', () => {
    cy.wrap(Object.values(MainRoutes).length - 2).should('equal', 6);
  });

  context('displays', () => {
    beforeEach(() => {
      window.localStorage.clear();
  
      cy.login();
  
      cy.visit(MainRoutes.DASHBOARD);
  
      cy.wait('@LoginRequest');
    });

    it('on the Dashboard screen', () => {
      MainNavSelectors.container();
    });

    it('the Pay Bills screen', () => {
      MainNavSelectors.container();
    });

    it('on the Dashboard', () => {
      MainNavSelectors.container();
    });

    it('on the Dashboard', () => {
      MainNavSelectors.container();
    });

    it('on the Dashboard', () => {
      MainNavSelectors.container();
    });

    it('on the Dashboard', () => {
      MainNavSelectors.container();
    });
  });
});