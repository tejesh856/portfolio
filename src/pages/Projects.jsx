import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import { projects } from "../data/data.js";
import "./Projects.css";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="projects page">
      <p className="mono-label">PROJECTS</p>
      <h1 className="projects-title">Things I've built</h1>
      <p className="projects-lede">
        A few of the products I've shipped — click any card to read what it does and where to find it.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setActive} />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
