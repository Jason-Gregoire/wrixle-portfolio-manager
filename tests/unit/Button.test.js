import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button label="Click me" />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
