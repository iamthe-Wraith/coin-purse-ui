/* eslint-disable @typescript-eslint/no-unsafe-argument */
import '../../../workaround-cypress-process-issue';
import { LoadingScreen } from '.';
import * as Selectors from './loading-screen-selectors';

describe('LoadingScreen', () => {
  it('should display the loading screen', () => {
    cy.mount((
      <LoadingScreen />
    ));
  
    Selectors.spinner();
  });
});
