import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Card title="Test Card" />);
    const cardTitle = getByText('Test Card');
    expect(cardTitle).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Card><p>Test content</p></Card>);
    const cardContent = getByText('Test content');
    expect(cardContent).toBeInTheDocument();
  });
});
