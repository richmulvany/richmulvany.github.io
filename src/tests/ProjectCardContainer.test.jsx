import { render, screen } from '@testing-library/react';
import ProjectCardContainer from '../components/projects/ProjectCardContainer';

const mockProject = {
  title: 'Container Project',
  description: 'Container description',
  tech: ['React'],
  link: '#',
  type: 'proj',
};

const mockState = {
  expanded: false,
  setHovered: jest.fn(),
  setLocked: jest.fn(),
};

jest.mock('../hooks/useMediaQuery', () => jest.fn(() => true));
jest.mock('../hooks/useProjectCardState', () => () => mockState);

describe('ProjectCardContainer', () => {
  test('renders DesktopProjectCard on desktop', () => {
    render(<ProjectCardContainer project={mockProject} />);
    expect(screen.getByText(/container project/i)).toBeInTheDocument();
  });
});
