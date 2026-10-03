import "./SkillsGrid.css";

// Small colored monogram badges — no external icon dependency, so the
// project runs offline with zero broken image requests.
const BADGE_COLORS = {
  react: "#61dafb",
  nextjs: "#f2efe8",
  redux: "#764abc",
  zustand: "#6c63ff",
  node: "#3fae4c",
  tailwind: "#38bdf8",
  mui: "#007fff",
  socket: "#35d0ba",
  mysql: "#f2b94b",
  mongodb: "#47a248",
  javascript: "#f0db4f",
  typescript: "#3178c6",
  python: "#ffd43b",
  github: "#f2efe8",
  vscode: "#3fa6de",
  npm: "#cb3837",
};

function initials(name) {
  return name
    .replace(/\.(js|io)$/i, "")
    .split(/[\s/]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function SkillsGrid({ groups }) {
  return (
    <div className="skills">
      {groups.map((group) => (
        <div key={group.label} className="skills-group">
          <p className="mono-label">{group.label.toUpperCase()}</p>
          <div className="skills-row">
            {group.skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <span
                  className="skill-badge"
                  style={{ color: BADGE_COLORS[skill.icon] || "var(--teal)" }}
                >
                  {initials(skill.name)}
                </span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
