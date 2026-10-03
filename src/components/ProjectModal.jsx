import { useEffect } from "react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <p className="mono-label">PROJECT</p>
        <h2 id="modal-title" className="modal-title">
          {project.title}
        </h2>
        <p className="modal-desc">{project.description}</p>
        <div className="modal-stack">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        <div className="modal-actions">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-small"
          >
            Live link
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-small"
          >
            View code
          </a>
        </div>
      </div>
    </div>
  );
}
