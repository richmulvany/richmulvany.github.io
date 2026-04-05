import { render, screen, fireEvent } from '@testing-library/react';
import SocialsFab from '../components/socials/SocialsFab';
import { socials } from '../data/socials';

describe('SocialsFab', () => {
  test('renders FAB button', () => {
    render(<SocialsFab show={true} />);
    expect(screen.getByLabelText(/open socials/i)).toBeInTheDocument();
  });

  test('does not render social menu items when show is false', () => {
    render(<SocialsFab show={false} />);
    // Menu items should not be in the document
    socials.forEach((s) => {
      expect(screen.queryByLabelText(s.description)).not.toBeInTheDocument();
    });
  });

  test('opens and closes menu on click', () => {
    render(<SocialsFab show={true} />);
    const fabButton = screen.getByLabelText(/open socials/i);

    // Open menu
    fireEvent.click(fabButton);
    socials.forEach((s) => {
      expect(screen.getByLabelText(s.description)).toBeInTheDocument();
    });

    // Close menu
    const closeButton = screen.getByLabelText(/close socials/i);
    fireEvent.click(closeButton);
    socials.forEach((s) => {
      expect(screen.queryByLabelText(s.description)).not.toBeInTheDocument();
    });
  });
});