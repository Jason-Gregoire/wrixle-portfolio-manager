import React from 'react';
import { render } from '@testing-library/react';
import Chart from '../components/Chart';

describe('Chart component', () => {
  it('renders correctly', () => {
    const data = [10, 20, 30];
    const { container } = render(<Chart data={data} />);
    const chartElement = container.querySelector('.chart');
    expect(chartElement).toBeInTheDocument();
  });

  it('displays correct data', () => {
    const data = [10, 20, 30];
    const { container } = render(<Chart data={data} />);
    const chartElement = container.querySelector('.chart');
    expect(chartElement.textContent).toBe('10,20,30');
  });
});
