import React from 'react';
import { render } from '@testing-library/react';
import List from '../components/List';

describe('List component', () => {
  it('renders correctly', () => {
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    const { getByText } = render(<List items={items} />);
    items.forEach((item) => {
      const listItem = getByText(item.name);
      expect(listItem).toBeInTheDocument();
    });
  });
});
