import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../pages/LandingPage';

describe('LandingPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(<LandingPage />);
    const pageTitle = getByText('Welcome to Wrixle Portfolio Manager');
    expect(pageTitle).toBeInTheDocument();
  });

  // Add more test cases as needed for interactions and functionalities specific to this page
});
