import "./ProjectCard.css";

// Distinct generative pattern per project, keyed by image id, so every card
// has a unique cover without needing uploaded screenshots.
const PATTERNS = {
  crypto: "/crypto.PNG",
  food: "/eatfood.PNG",
  chat: "/nexchat.PNG",
  study: "/studymateai.PNG",
  clock: "/clock.JPG",
  certificate: "/certificate.PNG",
};

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="proj-card" onClick={() => onOpen(project)}>
      <div className="proj-cover">
        <img src={PATTERNS[project.image]} alt={`${project.title} preview`} />
      </div>
      <div className="proj-body">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-summary">{project.summary}</p>
        <div className="proj-stack">
          {project.stack.slice(0, 3).map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="chip">+{project.stack.length - 3}</span>
          )}
        </div>
      </div>
      <button
        className="proj-open"
        aria-label={`Open ${project.title} details`}
      >
        View project
      </button>
    </article>
  );
}
