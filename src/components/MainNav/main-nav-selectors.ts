const _dataCy = 'main-nav';

export const container = () => cy.get(`[data-cy=${_dataCy}]`);
export const logo = () => cy.get(`[data-cy=${_dataCy}-logo-link]`);
export const payBillsLink = () => cy.get(`[data-cy=${_dataCy}-pay-bills]`);
export const payBillsIcon = () => cy.get('[data-cy=dollar-sign-icon]');
export const reportsLink = () => cy.get(`[data-cy=${_dataCy}-reports]`);
export const reportsIcon = () => cy.get('[data-cy=chart-icon]');
export const userMenu = () => cy.get('[data-cy=user-menu]');