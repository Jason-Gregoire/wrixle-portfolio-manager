import React from 'react';
import { render } from '@testing-library/react';
import PortfolioDashboard from '../pages/PortfolioDashboard';

describe('PortfolioDashboard page', () => {
  it('renders correctly', () => {
    const { getByText } = render(<PortfolioDashboard />);
    const pageTitle = getByText('Portfolio Dashboard');
    expect(pageTitle).toBeInTheDocument();
  });

  // Add more test cases as needed for interactions and functionalities specific to this page
});
