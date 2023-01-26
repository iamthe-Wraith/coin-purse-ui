import * as ComingSoon from '../../src/components/ComingSoonMessaging/coming-soon-selectors';

describe('Coming Soon Screen', () => {
  beforeEach(() => {
    window.localStorage.clear();

    cy.visit('/');
  });

  it('should show a coming soon message', () => {
    ComingSoon.container().should('exist');
  });
});
