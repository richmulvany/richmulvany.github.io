import { render, screen, fireEvent } from '@testing-library/react';
import MobileProjectCard from '../components/projects/MobileProjectCard';

const mockProject = {
  title: 'Mobile Project',
  description: 'Mobile description here',
  tech: ['React', 'JS'],
  link: '#',
  type: 'proj',
};

const mockState = {
  expanded: false,
  setLocked: jest.fn(),
};

describe('MobileProjectCard', () => {
  test('renders project title and tech when collapsed', () => {
    render(
      <MobileProjectCard
        project={mockProject}
        bgColor="#fff"
        pillColor="#00f"
        state={mockState}
      />
    );

    expect(screen.getByText(/mobile project/i)).toBeInTheDocument();
    mockProject.tech.forEach((t) => expect(screen.getByText(t)).toBeInTheDocument());
  });

  test('toggles expanded state on click', () => {
    render(
      <MobileProjectCard
        project={mockProject}
        bgColor="#fff"
        pillColor="#00f"
        state={mockState}
      />
    );

    const card = screen.getByText(/mobile project/i).closest('div');
    fireEvent.click(card);
    expect(mockState.setLocked).toHaveBeenCalled();
  });
});