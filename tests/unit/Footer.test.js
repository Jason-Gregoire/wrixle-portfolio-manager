import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText('© Wrixle 2023');
    expect(footerElement).toBeInTheDocument();
  });
});
