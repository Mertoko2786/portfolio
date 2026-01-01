import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section>
      <h2>Projecten</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
