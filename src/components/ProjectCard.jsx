function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="tech-list">
        {project.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Live
        </a>
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
