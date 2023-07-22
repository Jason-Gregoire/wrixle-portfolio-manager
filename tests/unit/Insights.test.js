import React from 'react';
import { render } from '@testing-library/react';
import Insights from '../components/Insights';

describe('Insights component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Insights />);
    const insightsElement = getByText('Insights Content');
    expect(insightsElement).toBeInTheDocument();
  });
});
