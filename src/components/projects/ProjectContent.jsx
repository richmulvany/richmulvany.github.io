import { PROJECT_ACTIONS } from '../../config/projectActions';

export default function ProjectContent({ project }) {
  const Action = PROJECT_ACTIONS[project.type];

  return (
    <>
      <h2 className="tracking-tight leading-tight text-3xl">{project.title}</h2>

      <p className="text-gray-700 text-sm leading-relaxed text-justify">{project.description}</p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-600 font-medium"
      >
        {Action}
      </a>
    </>
  );
}
