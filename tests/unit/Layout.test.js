import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../components/Layout';

describe('Layout component', () => {
  it('renders correctly', () => {
    const { container } = render(<Layout><div>Test Content</div></Layout>);
    const layoutElement = container.querySelector('.layout');
    expect(layoutElement).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Layout><div>Test Content</div></Layout>);
    const testContent = getByText('Test Content');
    expect(testContent).toBeInTheDocument();
  });
});
