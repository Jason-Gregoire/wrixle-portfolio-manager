import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/app';

describe('App component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    const pageTitle = getByText('Welcome to Wrixle Portfolio Manager');
    expect(pageTitle).toBeInTheDocument();
  });

  // Add more test cases as needed to cover other functionalities in the App component
});
