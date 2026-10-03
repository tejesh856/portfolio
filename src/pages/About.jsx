import { useState } from "react";
import Avatar from "../components/Avatar.jsx";
import { ExperienceTimeline, EducationTimeline } from "../components/Timeline.jsx";
import SkillsGrid from "../components/SkillsGrid.jsx";
import { profile, socials, experience, education, skillGroups } from "../data/data.js";
import "./About.css";

const TABS = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

function SocialIcon({ icon }) {
  const paths = {
    mail: <path d="M3 6h18v12H3z M3 6l9 7 9-7" />,
    github: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    ),
    linkedin: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21H9z" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
      {paths[icon] || paths.mail}
    </svg>
  );
}

export default function About() {
  const [tab, setTab] = useState("experience");

  return (
    <section className="about page">
      <div className="about-top">
        <Avatar size={168} className="about-avatar" />
        <div className="about-intro">
          <p className="mono-label">ABOUT</p>
          <h1 className="about-name">{profile.name}</h1>
          <p className="about-bio">{profile.bio}</p>
          <div className="about-row">
            <div className="about-socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="social-btn"
                  aria-label={s.name}
                  title={s.name}
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
            <a href={profile.resumeFile} download className="btn btn-primary btn-small">
              Download résumé
            </a>
          </div>
        </div>
      </div>

      <div className="about-tabs">
        <div className="tab-bar" role="tablist" aria-label="About sections">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={"tab-btn" + (tab === t.id ? " tab-btn-active" : "")}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="tab-panel">
          {tab === "experience" && <ExperienceTimeline items={experience} />}
          {tab === "education" && <EducationTimeline items={education} />}
          {tab === "skills" && <SkillsGrid groups={skillGroups} />}
        </div>
      </div>
    </section>
  );
}
