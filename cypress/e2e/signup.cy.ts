import * as Selectors from '../../src/screens/Signup/signup-selectors';
import { MainRoutes } from '../../src/routers/config';

const passwordErrorText = 'Passwords must be at least 8 characters long and container at least 1x capital letter, 1x lowercase letter, 1x number, and 1x of the following special characters: !@#$%^&*()-_';

describe('Sign Up Screen', () => {
  beforeEach(() => {
    window.localStorage.clear();

    cy.visit(MainRoutes.SIGNUP);
  });

  it('should show the signup form', () => {
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

        Selectors.confirmPassword.container()
          .within(() => {
            Selectors.confirmPassword.label().should('have.text', 'Confirm Password');
            Selectors.confirmPassword.text().should('not.exist');
            Selectors.confirmPassword.input();
            Selectors.confirmPassword.error().should('not.exist');
          });

        Selectors.cta();
        Selectors.alreadyHaveAccountLink();
      });
  });

  it('should allow user to sign up if there are no errors', () => {
    const email = 'test@test.com';
    const password = 'Password123!';

    Selectors.container()
      .within(() => {
        Selectors.email.container()
          .within(() => {
            Selectors.email.input()
              .focus()
              .type(email)
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

        Selectors.confirmPassword.container()
          .within(() => {
            Selectors.confirmPassword.input()
              .focus()
              .type(password)
              .blur();

            Selectors.confirmPassword.error().should('not.exist');
          });

        Selectors.cta().should('be.enabled');

        // TODO: click button and confirm user is created and is redirected to dashboard when complete
      });
  });

  // TODO: on 409 error
  // TODO: on 500 error

  it('should disable the signup cta by default', () => {
    Selectors.container()
      .within(() => {
        Selectors.cta().should('be.disabled');
      });
  });

  it('should redirect to /login if already have an account link is clicked', () => {
    Selectors.container()
      .within(() => {
        Selectors.alreadyHaveAccountLink().click();

        cy.url().should('include', MainRoutes.LOGIN);
      });
  });

  it('should show an error if no email is entered', () => {
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

        Selectors.confirmPassword.container()
          .within(() => {
            Selectors.confirmPassword.input()
              .focus()
              .type(password)
              .blur();

            Selectors.confirmPassword.error().should('not.exist');
          });
        // #endregion

        Selectors.cta().should('be.disabled');
      });
  });

  it('should show an error if an invalid email is entered', () => {
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

        Selectors.confirmPassword.container()
          .within(() => {
            Selectors.confirmPassword.input()
              .focus()
              .type(password)
              .blur();

            Selectors.confirmPassword.error().should('not.exist');
          });
        // #endregion

        Selectors.cta().should('be.disabled');
      });
  });

  it('should show an error if no password is entered', () => {
    const email = 'test@test.com';

    Selectors.container()
      .within(() => {
        Selectors.password.container()
          .within(() => {
            Selectors.password.input()
              .focus()
              .blur();

            Selectors.password.error().should('have.text', passwordErrorText);
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

        Selectors.confirmPassword.container()
          .within(() => {
            Selectors.confirmPassword.input()
              .focus()
              .blur();

            Selectors.confirmPassword.error().should('not.exist');
          });
        // #endregion

        Selectors.cta().should('be.disabled');
      });
  });

  it('should show an error if an invalid password is entered', () => {
    const email = 'test@test.com';
    const password = 'invalid';

    Selectors.container()
      .within(() => {
        Selectors.password.container()
          .within(() => {
            Selectors.password.input()
              .focus()
              .type(password)
              .blur();

            Selectors.password.error().should('have.text', passwordErrorText);
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

        Selectors.confirmPassword.container()
          .within(() => {
            Selectors.confirmPassword.input()
              .focus()
              .blur();

            Selectors.confirmPassword.error().should('not.exist');
          });
        // #endregion

        Selectors.cta().should('be.disabled');
      });
  });

  it('should show an error if password and confirmed password do not match', () => {
    const email = 'test@test.com';
    const password = 'Password123!';

    Selectors.container()
      .within(() => {
        Selectors.password.container()
          .within(() => {
            Selectors.password.input()
              .focus()
              .type(password)
              .blur();
          });

        Selectors.confirmPassword.container()
          .within(() => {
            Selectors.confirmPassword.input()
              .focus()
              .type(`invalid${password}`)
              .blur();

            Selectors.confirmPassword.error().should('have.text', 'Passwords do not match.');
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
