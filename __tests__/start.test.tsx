import { render, screen } from '@testing-library/react';
import StartPage from '@/start/page';

// Simple unit test to ensure the Start form renders the expected fields and button.
describe('StartPage component', () => {
  it('renders name and email inputs and a submit button', () => {
    render(<StartPage />);
    expect(screen.getByLabelText(/Full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Start/i })).toBeInTheDocument();
  });
});