import React from 'react';
import { render } from '@testing-library/react';
import Table from '../components/Table';

describe('Table component', () => {
  it('renders correctly', () => {
    const data = [
      { column1: 'A', column2: 'B', column3: 'C' },
      { column1: 'D', column2: 'E', column3: 'F' },
    ];
    const { getByText } = render(<Table data={data} />);
    data.forEach((item) => {
      expect(getByText(item.column1)).toBeInTheDocument();
      expect(getByText(item.column2)).toBeInTheDocument();
      expect(getByText(item.column3)).toBeInTheDocument();
    });
  });
});
