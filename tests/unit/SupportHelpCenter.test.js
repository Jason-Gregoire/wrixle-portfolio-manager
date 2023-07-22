import React from 'react';
import { render } from '@testing-library/react';
import SupportHelpCenter from '../pages/SupportHelpCenter';

describe('SupportHelpCenter page', () => {
  it('renders correctly', () => {
    const { getByText } = render(<SupportHelpCenter />);
    const pageTitle = getByText('Support & Help Center');
    expect(pageTitle).toBeInTheDocument();
  });

  // Add more test cases as needed for interactions and functionalities specific to this page
});
