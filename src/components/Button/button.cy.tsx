import '../../../workaround-cypress-process-issue';
import tinycolor from 'tinycolor2';
import { Button } from '.';
import { theme } from '../../styles/theme';

const btn = '[data-cy=button]';

describe('Button', () => {
  const text = 'Testing Button';

  it('should have text', () => {
    cy.mount(<Button>{ text }</Button>);

    cy.get(btn)
      .should('have.text', text)
      .should('have.css', 'font-size', '17.6px')
      .invoke('css', 'color')
      .then(clr => {
        expect(tinycolor(clr.toString()).toHexString().toUpperCase()).to.equal(theme.colors.neutral[100]);
      });
  });

  it('should be clickable', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    
    cy.mount(<Button onClick={ onClickSpy }>{ text }</Button>);

    cy.get(btn).click({ force: true })
      .then(() => {
        expect(onClickSpy).to.be.called;
      });
  });

  it('should be disabled', () => {
    cy.mount(<Button disabled>{ text }</Button>);

    cy.get(btn)
      .should('have.css', 'opacity', '0.5')
      .should('have.attr', 'disabled');
  });

  it('should not be clickable when disabled', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    
    cy.mount(<Button onClick={ onClickSpy } disabled>{ text }</Button>);

    cy.get(btn).click({ force: true })
      .then(() => {
        expect(onClickSpy).to.not.be.called;
      });
  });
});
