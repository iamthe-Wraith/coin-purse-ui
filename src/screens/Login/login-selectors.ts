// import { InputFieldSelectors } from '../../components/InputField/input-field-selectors';


const _dataCy = 'login';

export const container = () => cy.get(`[data-cy=${_dataCy}]`);

export const email = {
  container: () => cy.get(`[data-cy=${_dataCy}-email]`), 
  label: () => cy.get(`[data-cy=${_dataCy}-email-label]`),
  text: () => cy.get(`[data-cy=${_dataCy}-email-text]`),
  input: () => cy.get(`[data-cy=${_dataCy}-email-input]`),
  error: () => cy.get(`[data-cy=${_dataCy}-email-error]`),
};

export const password = {
  container: () => cy.get(`[data-cy=${_dataCy}-password]`), 
  label: () => cy.get(`[data-cy=${_dataCy}-password-label]`),
  text: () => cy.get(`[data-cy=${_dataCy}-password-text]`),
  input: () => cy.get(`[data-cy=${_dataCy}-password-input]`),
  error: () => cy.get(`[data-cy=${_dataCy}-password-error]`),
};

export const formError = () => cy.get(`[data-cy=${_dataCy}-form-error]`);
export const cta = () => cy.get(`[data-cy=${_dataCy}-cta]`);
export const dontHaveAccountLink = () => cy.get(`[data-cy=${_dataCy}-dont-have-acct-link]`);
