import React from "react";
import profileImg from "../assets/profile.png";
import Section from "../components/Section.jsx";
import ButtonLink from "../components/ButtonLink.jsx";
import SubstackEmbed from "../components/SubstackEmbed.jsx";

export default function Home() {
  const websites = [
    { label: "Blog", href: "https://emanoj.substack.com" },
    { label: "Podcast", href: "https://manojspeaks.com" },
    { label: "YouTube", href: "https://www.youtube.com/@checkoutaustralia" },
    { label: "Cooking", href: "https://unrecipes.net" },
    { label: "Photography", href: "https://unsplash.com/@emanoj_" },
  ];

  const projects = [
    { label: "Share Your Kofi", href: "https://shareyourkofi.com" },
    { label: "Purple Dino Books", href: "https://purpledinobooks.com" },
    { label: "The Red Box Tees", href: "https://theredboxtees.com" },
    { label: "These Stickers", href: "https://thesestickers.com" },
  ];
  

  // Contact Tally URL
  const tallyUrl = "https://tally.so/r/w8qkjP";

  return (
    <div className="page">
      <div className="shell">
        <div className="card">
          <header className="hero">
            <img className="avatar" src={profileImg} alt="Manoj Kumar" />
            <div>
              <h1 className="hi">Hi, I am Manoj Kumar. Nice to meet you :)</h1>
              <p className="summary">
                I am currently based in Sydney, Australia. Along with my full-time job, I have a
                passion for the creator economy - building useful online tools, telling stories, and
                sharing ideas. I enjoy coding web apps, drawing quirky illustrations, writing
                books, blogging my thoughts & opinions, traveling Australia, making
                podcasts, and experimenting in the kitchen. I make AI movies & assist
                filmmakers and music bands with camera work too! :) So much to do, so little time.
              </p>
            </div>
          </header>

          <main className="grid" style={{ padding: "0 16px 16px" }}>
            <div style={{ display: "grid", gap: 14 }}>
              <Section title="My Content">
                <div className="buttons">
                  {websites.map((x) => (
                    <ButtonLink key={x.label} href={x.href} variant="primary">
                      {x.label}
                    </ButtonLink>
                  ))}
                </div>
                <p className="small" style={{ margin: "12px 0 0" }}>
                  Check them out and engage with me there!
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

              <Section title="Learn from me">
  <p className="small" style={{ marginBottom: 12 }}>
    I occasionally teach beginner-friendly sessions based on things I’ve
    learned by doing — calmly, practically, and without hype.
  </p>

  <div className="buttons">
    <ButtonLink href="/make-ai-movies" variant="primary">
      Make AI Movies (Beginner 1:1)
    </ButtonLink>
  </div>
</Section>

              <Section title="Contact">
                <div className="buttons">
                  <a
                    className="btn btn-primary"
                    href={tallyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact Me <span aria-hidden="true">✉</span>
                  </a>
                </div>
              </Section>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <Section title="Newsletter Subscription on Substack">
                <SubstackEmbed />
              </Section>
            </div>
          </main>

          <footer className="footer">
            <div className="small">© {new Date().getFullYear()} Manoj Kumar</div>
            <div className="small">Thank you so much for visiting the site!</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
