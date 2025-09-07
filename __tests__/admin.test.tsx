import { render, screen } from '@testing-library/react';
import AdminPage from '@/admin/page';

describe('AdminPage component', () => {
  it('renders a sign‑in form when not authorized', () => {
    render(<AdminPage />);
    expect(screen.getByRole('heading', { name: /Admin Sign‑in/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
  });
});