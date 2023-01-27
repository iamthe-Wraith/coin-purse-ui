const _dataCy = 'input-field';

export const container = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}]`);
export const label = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}-label]`);
export const text = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}-text]`);
export const input = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}-input]`);
export const error = (dataCy = _dataCy) => cy.get(`[data-cy=${dataCy}-error]`);
