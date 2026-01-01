function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul>
        {project.tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <div className="links">
        <a href={project.liveUrl}>Live</a>
        <a href={project.repoUrl}>Code</a>
      </div>
    </div>
  );
}

export default ProjectCard;
