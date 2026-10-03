import "./Timeline.css";

export function ExperienceTimeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.id} className="timeline-item">
          <div className="timeline-node" />
          <div className="timeline-content">
            <p className="mono-label">{item.period}</p>
            <h4 className="timeline-role">{item.role}</h4>
            <p className="timeline-company">{item.company}</p>
            <ul className="timeline-points">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="timeline-stack">
              {item.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function EducationTimeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.id} className="timeline-item">
          <div className="timeline-node" />
          <div className="timeline-content">
            <p className="mono-label">{item.period}</p>
            <h4 className="timeline-role">{item.degree}</h4>
            <p className="timeline-company">{item.school}</p>
            <p className="timeline-detail">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
