// import { InputFieldSelectors } from '../../components/InputField/input-field-selectors';

const _dataCy = 'signup';

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

export const confirmPassword = {
  container: () => cy.get(`[data-cy=${_dataCy}-confirm-password]`), 
  label: () => cy.get(`[data-cy=${_dataCy}-confirm-password-label]`),
  text: () => cy.get(`[data-cy=${_dataCy}-confirm-password-text]`),
  input: () => cy.get(`[data-cy=${_dataCy}-confirm-password-input]`),
  error: () => cy.get(`[data-cy=${_dataCy}-confirm-password-error]`),
};

export const cta = () => cy.get(`[data-cy=${_dataCy}-cta]`);

export const alreadyHaveAccountLink = () => cy.get(`[data-cy=${_dataCy}-already-have-acct-link]`);
