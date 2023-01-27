/* eslint-disable @typescript-eslint/no-unsafe-argument */
import '../../../workaround-cypress-process-issue';
import { InputField } from '.';
import * as Selectors from './input-field-selectors';
import { noop } from '../../utils/noop';
import tinycolor from 'tinycolor2';
import { theme } from '../../styles/theme';

describe('InputFied', () => {
  it('should display an input field if no props are passed', () => {
    cy.mount((
      <InputField />
    ));
  
    Selectors.container()
      .should('exist')
      .within(() => {
        Selectors.input().should('exist');

        Selectors.label().should('not.exist');
        Selectors.text().should('not.exist');
        Selectors.error().should('not.exist');
      });
  });

  it('input should have value when a value is passed in', () => {
    const testValue = 'some test typed by the user';
    cy.mount((
      <InputField
        inputProps={ {
          value: testValue,
          onChange: noop,
        } }
      />
    ));
  
    Selectors.container()
      .should('exist')
      .within(() => {
        Selectors.input()
          .should('exist')
          .should('have.value', testValue);

        Selectors.label().should('not.exist');
        Selectors.text().should('not.exist');
        Selectors.error().should('not.exist');
      });
  });

  it('input should trigger onChange when text is typed into it', () => {
    const testValue = 'some test typed by the user';

    const onChangeSpy = cy.spy().as('onChangeSpy');

    cy.mount((
      <InputField
        inputProps={ {
          value: testValue,
          onChange: onChangeSpy,
        } }
      />
    ));
  
    Selectors.container()
      .should('exist')
      .within(() => {
        Selectors.input()
          .should('exist')
          .type(testValue)
          .should('have.value', testValue);

        cy.wrap(onChangeSpy).should('be.called');

        Selectors.label().should('not.exist');
        Selectors.text().should('not.exist');
        Selectors.error().should('not.exist');
      });
  });

  it('should visually show that the input has focus', () => {
    cy.mount((
      <InputField />
    ));
  
    Selectors.container()
      .should('exist')
      .within(() => {
        Selectors.input()
          .focus()
          .invoke('css', 'border-color')
          .then(clr => {
            cy.wrap(tinycolor(clr.toString()).toHexString().toUpperCase()).should('equal', theme.colors.primary[400].toUpperCase());
          });

        Selectors.label().should('not.exist');
        Selectors.text().should('not.exist');
        Selectors.error().should('not.exist');
      });
  });

  it('should display a label if one is passed as a prop', () => {
    cy.mount((
      <InputField
        label='Test'
      />
    ));
  
    Selectors.container()
      .should('exist')
      .within(() => {
        Selectors.label()
          .should('exist')
          .should('have.text', 'Test');
        
        Selectors.input().should('exist');
        Selectors.text().should('not.exist');
        Selectors.error().should('not.exist');
      });
  });

  it('should display text if text is passed as a prop', () => {
    cy.mount((
      <InputField
        text='This is a test.'
      />
    ));
  
    Selectors.container()
      .should('exist')
      .within(() => {
        Selectors.text()
          .should('exist')
          .should('have.text', 'This is a test.');
        
        Selectors.input().should('exist');
        Selectors.label().should('not.exist');
        Selectors.error().should('not.exist');
      });
  });

  it('should display error if an error message is passed as a prop', () => {
    cy.mount((
      <InputField
        error='An error has occurred.'
      />
    ));
  
    Selectors.container()
      .should('exist')
      .within(() => {
        Selectors.error()
          .should('exist')
          .should('have.text', 'An error has occurred.');
        
        Selectors.input().should('exist');
        Selectors.label().should('not.exist');
        Selectors.text().should('not.exist');
      });
  });
});
