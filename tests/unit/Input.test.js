import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../components/Input';

describe('Input component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<Input type="text" placeholder="Enter text" value="" onChange={() => {}} />);
    const inputElement = getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange function when value changes', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="Enter text" value="" onChange={onChangeMock} />
    );
    const inputElement = getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'Test input' } });
    expect(onChangeMock).toHaveBeenCalledWith('Test input');
  });
});
