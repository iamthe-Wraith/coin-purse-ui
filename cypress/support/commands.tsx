/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { mount } from 'cypress/react18';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      mountWithRouter(component: ReactNode, options?: any): Chainable<void>
    }
  }
}

Cypress.Commands.add('mountWithRouter', (component: ReactNode, options: any = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options;

  const wrapped = <BrowserRouter { ...routerProps }>{ component }</BrowserRouter>;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  mount(wrapped, mountOptions);
});

Cypress.Commands.add('mount', mount);