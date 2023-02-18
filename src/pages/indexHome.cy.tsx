import React from 'react';
import Home from './index';
import * as NextRouter from 'next/router';

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />);
    const pathname = 'some-path';
    const push = cy.stub();
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push });
  });
});
