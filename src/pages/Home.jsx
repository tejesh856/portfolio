import { Link } from "react-router-dom";
import Avatar from "../components/Avatar.jsx";
import { profile } from "../data/data.js";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-grid page">
        <div className="home-copy">
          <p className="mono-label">FULL STACK DEVELOPER / REACT · REACT NATIVE · NODE</p>
          <h1 className="home-title">
            Hey, I'm {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}.
            <br />
            <span className="home-title-accent">I build things that update live.</span>
          </h1>
          <p className="home-lede">{profile.tagline}</p>
          <div className="home-actions">
            <Link to="/projects" className="btn btn-primary">
              See my work
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="home-portrait">
          <Avatar size={300} />
          <div className="home-portrait-tag">
            <span className="home-portrait-dot" />
            open to new roles
          </div>
        </div>
      </div>
    </section>
  );
}
