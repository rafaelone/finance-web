import { Input } from '@/components/input';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Input Component', () => {
  it('should be able to render a input component "Your name" as a placeholder text', () => {
    render(<Input placeholder="Your name" />);
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
  });

  it('should be able to render a input component with red border', () => {
    render(<Input placeholder="Your name" hasError />);
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByTestId('label-test')).toHaveClass(
      'data-[error=true]:border-red-100'
    );
  });

  it('should be able to change border color when input hover', async () => {
    render(<Input placeholder="Your name" />);
    const input = screen.getByPlaceholderText('Your name');
    fireEvent.mouseEnter(input);

    waitFor(() => {
      expect(input).toHaveClass('focus-within:border-white');
    });
  });
});
