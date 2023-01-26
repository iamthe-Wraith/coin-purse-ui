/* eslint-disable @typescript-eslint/no-unsafe-argument */
import '../../../workaround-cypress-process-issue';
import tinycolor from 'tinycolor2';
import { Card } from '.';
import { theme } from '../../styles/theme';

const card = '[data-cy=card]';

describe('Card', () => {
  const text = 'Testing Card';

  it('should contain any children passed to it', () => {
    cy.mount(<Card dataCy='card'>{ text }</Card>);
  
    cy.get(card)
      .should('have.text', text);
  });

  context('Primary', () => {
    it('should have primary border color', () => {
      cy.mount(<Card dataCy='card' type='primary'>{ text }</Card>);
  
      cy.get(card)
        .invoke('css', 'border-radius')
        .should('equal', '8px');
        
      cy.get(card)
        .invoke('css', 'padding')
        .should('equal', '12px');

      cy.get(card)
        .invoke('css', 'border-color')
        .then(clr => {
          expect(tinycolor(clr.toString()).toHexString().toUpperCase()).to.equal(theme.colors.primary[400].toUpperCase());
        });
    });
  });

  context('Secondary', () => {
    it('should have secondary border color', () => {
      cy.mount(<Card dataCy='card' type='secondary'>{ text }</Card>);
  
      cy.get(card)
        .invoke('css', 'border-radius')
        .should('equal', '8px');
        
      cy.get(card)
        .invoke('css', 'padding')
        .should('equal', '12px');

      cy.get(card)
        .invoke('css', 'border-color')
        .then(clr => {
          expect(tinycolor(clr.toString()).toHexString().toUpperCase()).to.equal(theme.colors.secondary[400].toUpperCase());
        });
    });
  });

  context('Tertiary', () => {
    it('should have tertiary border color', () => {
      cy.mount(<Card dataCy='card' type='tertiary'>{ text }</Card>);
  
      cy.get(card)
        .invoke('css', 'border-radius')
        .should('equal', '8px');
        
      cy.get(card)
        .invoke('css', 'padding')
        .should('equal', '12px');

      cy.get(card)
        .invoke('css', 'border-color')
        .then(clr => {
          expect(tinycolor(clr.toString()).toHexString().toUpperCase()).to.equal(theme.colors.tertiary[400].toUpperCase());
        });
    });
  });

  context('Blank', () => {
    it('should have a transparent border color', () => {
      cy.mount(<Card dataCy='card'>{ text }</Card>);
  
      cy.get(card)
        .invoke('css', 'border-radius')
        .should('equal', '8px');
      
      cy.get(card)
        .invoke('css', 'padding')
        .should('equal', '12px');

      cy.get(card)
        .invoke('css', 'border-color')
        .then(clr => {
          expect(tinycolor(clr.toString()).toHex8String().toUpperCase()).to.equal('#00000000');
        });
    });
  });
});
