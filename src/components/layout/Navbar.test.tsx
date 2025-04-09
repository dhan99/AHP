import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the logo and navigation elements', () => {
    render(<Navbar />);
    
    // Check if the trucking insurance text is rendered
    expect(screen.getByText(/Commercial Trucking Insurance/i)).toBeInTheDocument();
    
    // Check if the login button is rendered
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
}); 