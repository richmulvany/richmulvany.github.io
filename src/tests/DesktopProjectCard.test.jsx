import { render, screen } from '@testing-library/react';
import DesktopProjectCard from '../components/projects/DesktopProjectCard';

const mockProject = {
  title: 'Test Project',
  description: 'This is a test description',
  tech: ['React', 'Tailwind'],
  link: '#',
  type: 'proj',
};

const mockState = {
  expanded: false,
  setHovered: jest.fn(),
  setLocked: jest.fn(),
};

describe('DesktopProjectCard', () => {
  test('renders project title, description, tech, and link', () => {
    render(
      <DesktopProjectCard project={mockProject} bgColor="#fff" pillColor="#f00" state={mockState} />
    );

    expect(screen.getByText(/test project/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a test description/i)).toBeInTheDocument();
    mockProject.tech.forEach((t) => expect(screen.getByText(t)).toBeInTheDocument());
    expect(screen.getByText(/view project →/i)).toBeInTheDocument();
  });
});
