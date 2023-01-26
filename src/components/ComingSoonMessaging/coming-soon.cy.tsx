import '../../../workaround-cypress-process-issue';
import { ComingSoonMessaging } from '.';
import * as ComingSoon from './coming-soon-selectors';

describe('ComingSoonMessaging', () => {
  it('should mount', () => {
    cy.mount(<ComingSoonMessaging />);
    ComingSoon.container()
      .should('exist')
      .within(() => {
        ComingSoon.header().should('have.text', 'Coming Soon');
        ComingSoon.text().should('have.text', 'Coin Purse is coming soon. Please check back later.');
      });
  });
});
