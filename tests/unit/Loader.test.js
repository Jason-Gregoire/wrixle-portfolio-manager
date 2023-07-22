import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../components/Loader';

describe('Loader component', () => {
  it('renders correctly', () => {
    const { container } = render(<Loader />);
    const loaderElement = container.querySelector('.loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
