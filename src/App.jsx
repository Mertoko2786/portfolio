import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <main>
      <header>
        <h1>Jouw Naam</h1>
        <p>Frontend Developer</p>
      </header>

      <section>
        <h2>Over mij</h2>
        <p>
          Placeholder tekst. Hier komt later een korte intro over wie je bent.
        </p>
      </section>

      <section>
        <h2>Projecten</h2>

        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer>
        <p>© 2025 Jouw Naam</p>
      </footer>
    </main>
  );
}

export default App;
