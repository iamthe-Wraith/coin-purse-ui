const _dataCy = 'user-menu';

export const container = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}]`);
export const trigger = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}-trigger]`);
export const triggerIcon = () => cy.get('[data-cy=default-avatar-icon]');
export const popover = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}-popover]`);
export const profileSettingsLink = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}-profile]`);
export const incomeConfigLink = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}-income-config]`);
export const billsConfigLink = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}-bills-config]`);