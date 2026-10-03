import { profile } from "../data/data.js";
import "./Contact.css";

const ICONS = {
  mail: <path d="M3 6h18v12H3z M3 6l9 7 9-7" />,
  phone: (
    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2z" />
  ),
  pin: (
    <path d="M12 22s7-7.4 7-12.6A7 7 0 0 0 5 9.4C5 14.6 12 22 12 22z M12 12a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8z" />
  ),
};

function ContactRow({ icon, label, value, href }) {
  const Tag = href ? "a" : "div";
  const linkProps = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" }
    : {};
  return (
    <Tag className="contact-row" {...linkProps}>
      <span className="contact-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
          {ICONS[icon]}
        </svg>
      </span>
      <span>
        <span className="contact-label mono-label">{label.toUpperCase()}</span>
        <span className="contact-value">{value}</span>
      </span>
    </Tag>
  );
}

export default function Contact() {
  return (
    <section className="contact page">
      <p className="mono-label">CONTACT</p>
      <h1 className="contact-title">Let's talk</h1>
      <p className="contact-lede">
        Have a project in mind, or just want to say hi? Reach me directly through any of these.
      </p>

      <div className="contact-list">
        <ContactRow icon="mail" label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <ContactRow icon="phone" label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
        <ContactRow icon="pin" label="Location" value={profile.address} />
      </div>
    </section>
  );
}
