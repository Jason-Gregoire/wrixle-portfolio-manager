import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

describe('Form component', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<Form />);
    const inputElement = getByLabelText('Input:');
    const buttonElement = getByLabelText('Submit');
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onSubmit function with input value when submitted', () => {
    const onSubmitMock = jest.fn();
    const { getByLabelText } = render(<Form onSubmit={onSubmitMock} />);
    const inputElement = getByLabelText('Input:');
    const buttonElement = getByLabelText('Submit');
    fireEvent.change(inputElement, { target: { value: 'Test input' } });
    fireEvent.click(buttonElement);
    expect(onSubmitMock).toHaveBeenCalledWith('Test input');
  });
});
