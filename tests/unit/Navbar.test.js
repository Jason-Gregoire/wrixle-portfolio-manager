import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Navbar />);
    const logoElement = getByText('Wrixle');
    expect(logoElement).toBeInTheDocument();

    const homeLink = getByText('Home');
    const aboutLink = getByText('About');
    const portfolioLink = getByText('Portfolio');
    const contactLink = getByText('Contact');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
