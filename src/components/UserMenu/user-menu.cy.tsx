import '../../../workaround-cypress-process-issue';
import { UserMenu } from '.';
import * as UserMenuSelectors from './user-menu-selectors';
import { MainRoutes } from '../../routers/config';

describe('UserMenu', () => {
  it('should mount', () => {
    cy.mountWithRouter(<UserMenu />);

    UserMenuSelectors.container()
      .within(() => {
        UserMenuSelectors.trigger()
          .within(() => {
            UserMenuSelectors.triggerIcon();
          });
      });

    UserMenuSelectors.popover().should('not.exist');
  });

  it('should open when clicked', () => {
    cy.mountWithRouter(<UserMenu />);

    UserMenuSelectors.container()
      .within(() => {
        UserMenuSelectors.trigger().click();
      });

    UserMenuSelectors.popover()
      .within(() => {
        cy.get('a').should('have.length', 3);
        UserMenuSelectors.profileSettingsLink()
          .should('have.attr', 'href', MainRoutes.PROFILE_SETTINGS);
        UserMenuSelectors.incomeConfigLink()
          .should('have.attr', 'href', MainRoutes.INCOME_CONFIG);
        UserMenuSelectors.billsConfigLink()
          .should('have.attr', 'href', MainRoutes.BILLS_CONFIG);
      });
  });

  it('should close when trigger is clicked after being opened', () => {
    cy.mountWithRouter(<UserMenu />);

    UserMenuSelectors.container()
      .within(() => {
        UserMenuSelectors.trigger().click();
      });

    UserMenuSelectors.popover();

    UserMenuSelectors.container()
      .within(() => {
        UserMenuSelectors.trigger().click();
      });

    UserMenuSelectors.popover()
      .should('not.exist');
  });

  it('should close when outside click occurs after being opened', () => {
    cy.mountWithRouter(<UserMenu />);

    UserMenuSelectors.container()
      .within(() => {
        UserMenuSelectors.trigger().click();
      });

    UserMenuSelectors.popover();

    cy.get('body').click();

    UserMenuSelectors.popover()
      .should('not.exist');
  });
});
