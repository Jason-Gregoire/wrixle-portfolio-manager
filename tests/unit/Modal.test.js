import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Modal component', () => {
  it('renders correctly when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );
    const modalContent = getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );
    const modalContent = queryByText('Modal Content');
    expect(modalContent).toBeNull();
  });

  it('calls onClose function when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );
    const closeButton = getByText('×');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
