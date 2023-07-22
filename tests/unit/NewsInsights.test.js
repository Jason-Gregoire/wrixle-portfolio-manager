import React from 'react';
import { render } from '@testing-library/react';
import NewsInsights from '../pages/NewsInsights';

describe('NewsInsights page', () => {
  it('renders correctly', () => {
    const { getByText } = render(<NewsInsights />);
    const pageTitle = getByText('News & Insights');
    expect(pageTitle).toBeInTheDocument();
  });

  // Add more test cases as needed for interactions and functionalities specific to this page
});
