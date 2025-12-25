import React from "react";
import profileImg from "./assets/profile.jpg";
import Section from "./components/Section.jsx";
import ButtonLink from "./components/ButtonLink.jsx";
import SubstackEmbed from "./components/SubstackEmbed.jsx";

export default function App() {
  const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL || "you@example.com").trim();

  const websites = [
    { label: "Blog", href: "https://emanoj.substack.com/" },
    { label: "Podcast", href: "https://manojspeaks.com" },
    { label: "YouTube", href: "https://www.youtube.com/@checkoutaustralia" },
    { label: "Cooking", href: "https://unrecipes.net" },
    { label: "Tees", href: "https://theredboxtees.com" }
  ];

  const projects = [
    { label: "ShareYourKofi", href: "https://shareyourkofi.com" },
    { label: "Purple Dino Books", href: "https://purpledinobooks.com" }
  ];

  return (
    <div className="page">
      <div className="shell">
        <div className="card">
          <header className="hero">
            <img className="avatar" src={profileImg} alt="Manoj Kumar" />
            <div>
              <h1 className="hi">Hi, I am Manoj Kumar</h1>
              <p className="summary">
                I am currently based in Sydney, Australia. Along my full-time job, I have a passion
                for building useful online tools, telling stories, and sharing ideas. I enjoy coding
                web apps, drawing quirky illustrations, writing children’s books, blogging my
                thoughts & opinions, traveling Australia, making podcasts, and experimenting in the
                kitchen.
              </p>
            </div>
          </header>

          <main className="grid" style={{ padding: "0 16px 16px" }}>
            <div style={{ display: "grid", gap: 14 }}>
              <Section title="Websites I own">
                <div className="buttons">
                  {websites.map((x) => (
                    <ButtonLink key={x.label} href={x.href} variant="primary">
                      {x.label}
                    </ButtonLink>
                  ))}
                </div>
                <p className="small" style={{ margin: "12px 0 0" }}>
                  Tip: replace the placeholder links (Podcast/Cooking/Tees) with your real URLs.
                </p>
              </Section>

              <Section title="Creator projects">
                <div className="buttons">
                  {projects.map((x) => (
                    <ButtonLink key={x.label} href={x.href}>
                      {x.label}
                    </ButtonLink>
                  ))}
                </div>
              </Section>

              <Section title="Contact">
                <div className="buttons">
                  <a
                  className="btn btn-primary"
                  href="https://tally.so/r/w8qkjP"
                  target="_blank"
                  rel="noreferrer"
                  >
                    Contact Me <span aria-hidden="true">✉</span>
                    </a>
                    </div>
              </Section>

            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <Section title="Subscribe (Substack)">
                <SubstackEmbed />
                <p className="small" style={{ margin: "12px 0 0" }}>
                  This is the official iFrame-based Substack embed form (limited styling by design). :contentReference[oaicite:2]{index=2}
                </p>
              </Section>
            </div>
          </main>

          <footer className="footer">
            <div className="small">© {new Date().getFullYear()} Manoj Kumar</div>
            <div className="small">Minimal. Fast. Mobile-first.</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
