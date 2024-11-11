import { Button } from '@/components/button';
import { render, screen } from '@testing-library/react';

describe('Button Component', () => {
  it('should be able to render a button component with text', () => {
    render(<Button text="john doe" />);
    expect(screen.getByText('john doe')).toBeInTheDocument();
  });

  it('should be able to render a button component with loader2', () => {
    render(<Button text="john doe" disabled={true} />);
    expect(screen.queryByText('john doe')).not.toBeInTheDocument();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
