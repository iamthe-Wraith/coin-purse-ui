import { MainRoutes } from '../../src/routers/config';
import * as SignupSelectors from '../../src/screens/Signup/signup-selectors';
import { getUser } from './factories/user';

describe('Private Page', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should redirect to login screen if user is not authenticated and tries to view a private page', () => {
    cy.visit(MainRoutes.DASHBOARD);
    cy.url().should('include', MainRoutes.LOGIN);
  });

  it('should allow user to view their private dashboard after they signup', () => {
    cy.visit(MainRoutes.SIGNUP);

    const user = getUser();
    const password = 'Password123!';

    cy.intercept('POST', '/api/v1/signup', {
      statusCode: 200,
      body: { user }
    }).as('SignupRequest');

    SignupSelectors.container()
      .within(() => {
        SignupSelectors.email.container()
          .within(() => {
            SignupSelectors.email.input()
              .focus()
              .type(user.email)
              .blur();

            SignupSelectors.email.error().should('not.exist');
          });

        SignupSelectors.password.container()
          .within(() => {
            SignupSelectors.password.input()
              .focus()
              .type(password)
              .blur();

            SignupSelectors.password.error().should('not.exist');
          });

        SignupSelectors.confirmPassword.container()
          .within(() => {
            SignupSelectors.confirmPassword.input()
              .focus()
              .type(password)
              .blur();

            SignupSelectors.confirmPassword.error().should('not.exist');
          });

        SignupSelectors.cta()
          .should('be.enabled')
          .click();

        cy.wait('@SignupRequest');

        cy.url().should('include', MainRoutes.DASHBOARD);
      });
  });

  // TODO: add test for user beign able to view private page after login has been implemented
});
