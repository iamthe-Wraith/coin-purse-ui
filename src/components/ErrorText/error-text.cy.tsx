/* eslint-disable @typescript-eslint/no-unsafe-argument */
import '../../../workaround-cypress-process-issue';
import tinycolor from 'tinycolor2';
import { ErrorText } from '.';
import { theme } from '../../styles/theme';

const card = '[data-cy=error]';

describe('Error Text', () => {
  const text = 'Test error message.';

  it('should display any text passed to it as children', () => {
    cy.mount(<ErrorText dataCy='error'>{ text }</ErrorText>);
  
    cy.get(card)
      .should('have.text', text);
  });

  it('should have error colored text', () => {
    cy.mount(<ErrorText dataCy='error'>{ text }</ErrorText>);
  
    cy.get(card)
      .invoke('css', 'color')
      .then(clr => {
        cy.wrap(tinycolor(clr.toString()).toHexString().toUpperCase()).should('equal', theme.colors.error.toUpperCase());
      });
  });
});
