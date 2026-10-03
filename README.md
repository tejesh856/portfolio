# Tejesh Reddy J — Portfolio

A React + Vite portfolio with Home, About, Projects and Contact pages. Dark, code-inspired
theme (indigo/teal on charcoal), Space Grotesk + IBM Plex type, timeline-style experience &
education, and a project grid with a click-through detail modal.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for deployment:

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to Vercel, Netlify, GitHub Pages, etc.

## Add your own content

1. **Photo** — drop your headshot at `public/profile.jpg`, then in
   `src/components/Avatar.jsx` swap the placeholder SVG for:
   ```jsx
   <img src="/profile.jpg" alt="Tejesh Reddy J" width={size} height={size}
        style={{ borderRadius: 24, objectFit: "cover" }} className={className} />
   ```
2. **Résumé** — put your résumé PDF at `public/resume.pdf`. The "Download résumé" button
   on the About page already points there.
3. **Real project links & screenshots** — open `src/data/data.js` and fill in each project's
   `link` and `github` URLs. To use a real screenshot instead of the generated pattern, add an
   image to `src/assets` and swap the `<svg>` in `src/components/ProjectCard.jsx` for an `<img>`.
4. **Social links** — update the GitHub/LinkedIn URLs in `src/data/data.js` (`socials` array).
5. **Colors** — all design tokens (colors, fonts, radii) live at the top of `src/index.css`
   under `:root`, so you can retheme the whole site from one place.

## Structure

```
src/
  components/   Navbar, Avatar, Timeline, SkillsGrid, ProjectCard, ProjectModal
  pages/        Home, About, Projects, Contact
  data/         data.js — all your resume content in one place
```
