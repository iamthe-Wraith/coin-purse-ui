import * as Selectors from '../../src/screens/Login/login-selectors';
import { MainRoutes } from '../../src/routers/config';
import { getUser } from '../factories/user';

describe('Login Screen', () => {
  beforeEach(() => {
    window.localStorage.clear();

    cy.visit(MainRoutes.LOGIN);
  });

  context('Form and Validation', () => {
    it('should show the login form', () => {
      Selectors.container()
        .within(() => {
          Selectors.email.container()
            .within(() => {
              Selectors.email.label().should('have.text', 'Email');
              Selectors.email.text().should('not.exist');
              Selectors.email.input();
              Selectors.email.error().should('not.exist');
            });
  
          Selectors.password.container()
            .within(() => {
              Selectors.password.label().should('have.text', 'Password');
              Selectors.password.text().should('not.exist');
              Selectors.password.input();
              Selectors.password.error().should('not.exist');
            });
  
          Selectors.formError().should('not.exist');
          Selectors.cta();
          Selectors.dontHaveAccountLink();
        });
    });

    it('should disable the login cta by default', () => {
      Selectors.container()
        .within(() => {
          Selectors.cta().should('be.disabled');
        });
    });

    it('should redirect to /signup if don\'t have account link is clicked', () => {
      Selectors.container()
        .within(() => {
          Selectors.dontHaveAccountLink().click();
  
          cy.url().should('include', MainRoutes.SIGNUP);
        });
    });

    it('should show a email error if no email is entered', () => {
      const password = 'Password123!';
  
      Selectors.container()
        .within(() => {
          Selectors.email.container()
            .within(() => {
              Selectors.email.input()
                .focus()
                .blur();
  
              Selectors.email.error().should('have.text', 'Email is required.');
            });
  
          // #region
          //
          // fill out rest of form to test disabled state of cta
          Selectors.password.container()
            .within(() => {
              Selectors.password.input()
                .focus()
                .type(password)
                .blur();
  
              Selectors.password.error().should('not.exist');
            });
          // #endregion
  
          Selectors.cta().should('be.disabled');
        });
    });

    it('should show an email error if an invalid email format is entered', () => {
      const email = 'invalid';
      const password = 'Password123!';
  
      Selectors.container()
        .within(() => {
          Selectors.email.container()
            .within(() => {
              Selectors.email.input()
                .focus()
                .type(email)
                .blur();
  
              Selectors.email.error().should('have.text', 'Invalid email format.');
            });
  
          // #region
          //
          // fill out rest of form to test disabled state of cta
          Selectors.password.container()
            .within(() => {
              Selectors.password.input()
                .focus()
                .type(password)
                .blur();
  
              Selectors.password.error().should('not.exist');
            });
          // #endregion
  
          Selectors.cta().should('be.disabled');
        });
    });

    it('should show a password error if no password is entered', () => {
      const email = 'test@test.com';
  
      Selectors.container()
        .within(() => {
          Selectors.password.container()
            .within(() => {
              Selectors.password.input()
                .focus()
                .blur();
  
              Selectors.password.error().should('have.text', 'Password is required.');
            });
  
          // #region
          //
          // fill out rest of form to test disabled state of cta
          Selectors.email.container()
            .within(() => {
              Selectors.email.input()
                .focus()
                .type(email)
                .blur();
  
              Selectors.email.error().should('not.exist');
            });
          // #endregion
  
          Selectors.cta().should('be.disabled');
        });
    });
  });

  context('Login Requests', () => {
    it('should allow user to login if there are no errors', () => {
      const user = getUser();
      const password = 'Password123!';
  
      cy.intercept('POST', '/api/v1/login', {
        statusCode: 200,
        body: { user }
      }).as('LoginRequest');
  
      Selectors.container()
        .within(() => {
          Selectors.email.container()
            .within(() => {
              Selectors.email.input()
                .focus()
                .type(user.email)
                .blur();
  
              Selectors.email.error().should('not.exist');
            });
  
          Selectors.password.container()
            .within(() => {
              Selectors.password.input()
                .focus()
                .type(password)
                .blur();
  
              Selectors.password.error().should('not.exist');
            });
  
          Selectors.cta()
            .should('be.enabled')
            .click();
  
          cy.wait('@LoginRequest');
  
          cy.url().should('include', MainRoutes.DASHBOARD);
        });
    });

    it('should show form error if api returns 401', () => {
      const user = getUser();
      const password = 'Password123!';
      const error = {
        message: 'invalid email or password.',
        name: 'Authentication'
      };
  
      cy.intercept('POST', '/api/v1/login', {
        statusCode: 401,
        body: error,
      }).as('LoginRequest');
  
      Selectors.container()
        .within(() => {
          Selectors.email.container()
            .within(() => {
              Selectors.email.input()
                .focus()
                .type(user.email)
                .blur();
  
              Selectors.email.error().should('not.exist');
            });
  
          Selectors.password.container()
            .within(() => {
              Selectors.password.input()
                .focus()
                .type(password)
                .blur();
  
              Selectors.password.error().should('not.exist');
            });
  
          Selectors.cta()
            .should('be.enabled')
            .click();
  
          cy.wait('@LoginRequest');
  
          Selectors.formError()
            .should('have.text', error.message);
        });
    });

    it('should show form error if api returns 422', () => {
      const user = getUser();
      const password = 'Password123!';
      const error = {
        message: 'request is unprocessable.',
        name: 'Unprocessable'
      };
  
      cy.intercept('POST', '/api/v1/login', {
        statusCode: 422,
        body: error,
      }).as('LoginRequest');
  
      Selectors.container()
        .within(() => {
          Selectors.email.container()
            .within(() => {
              Selectors.email.input()
                .focus()
                .type(user.email)
                .blur();
  
              Selectors.email.error().should('not.exist');
            });
  
          Selectors.password.container()
            .within(() => {
              Selectors.password.input()
                .focus()
                .type(password)
                .blur();
  
              Selectors.password.error().should('not.exist');
            });
  
          Selectors.cta()
            .should('be.enabled')
            .click();
  
          cy.wait('@LoginRequest');
  
          Selectors.formError()
            .should('have.text', error.message);
        });
    });

    it('should show form error if api returns 500', () => {
      const user = getUser();
      const password = 'Password123!';
      const error = {
        message: 'something went wrong.',
        name: 'Server'
      };
  
      cy.intercept('POST', '/api/v1/login', {
        statusCode: 500,
        body: error,
      }).as('LoginRequest');
  
      Selectors.container()
        .within(() => {
          Selectors.email.container()
            .within(() => {
              Selectors.email.input()
                .focus()
                .type(user.email)
                .blur();
  
              Selectors.email.error().should('not.exist');
            });
  
          Selectors.password.container()
            .within(() => {
              Selectors.password.input()
                .focus()
                .type(password)
                .blur();
  
              Selectors.password.error().should('not.exist');
            });
  
          Selectors.cta()
            .should('be.enabled')
            .click();
  
          cy.wait('@LoginRequest');
  
          Selectors.formError()
            .should('have.text', error.message);
        });
    });
  });
});