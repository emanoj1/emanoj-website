import React from "react";
import profileImg from "../assets/profile.png";
import Section from "../components/Section.jsx";
import ButtonLink from "../components/ButtonLink.jsx";

export default function LearnToCodeQuick() {
  return (
    <div className="page">
      <div className="shell">
        <div className="card">
          {/* Top bar / back navigation */}
          <header
            style={{
              padding: "14px 16px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <a
              href="/"
              className="small"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ← Home
            </a>
          </header>

          {/* Main content */}
          <main className="grid" style={{ padding: "16px" }}>
            {/* LEFT COLUMN — explanation */}
            <div style={{ display: "grid", gap: 14 }}>
              {/* Hero */}
              <Section>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <img
                    src={profileImg}
                    alt="Manoj Kumar"
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "999px",
                      border: "1px solid var(--border)",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h1
                      style={{
                        margin: 0,
                        fontSize: "22px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Learn To Code Quickly
                    </h1>
                    <p className="small" style={{ margin: "4px 0 0" }}>
                      Using AI, GitHub, VS Code and other applications!
                    </p>
                  </div>
                </div>

                <p className="summary" style={{ marginTop: 10 }}>
                  I offer a calm, beginner-friendly 1-on-1 tutorial for people
                  who want to learn how to build and launch a real web
                  application or a website QUICKLY using AI. A site that you code, not
                  using templated webpages or a publishing platform. In a
                  90-minute session, we work through the complete end-to-end
                  process - from setting up a project, using AI to generate prompts
                  and understanding the
                  code structure, testing and refining features, to deploying
                  the app live on a custom domain. This is a practical, hands-on
                  walkthrough focused on understanding the workflow well enough
                  to repeat it independently.
                </p>
              </Section>

              <Section title="What this session covers">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li>
                    Setting up a project locally and understanding how the
                    pieces fit together
                  </li>
                  <li>
                    Working with a modern full-stack web app (frontend, backend,
                    and database) using AI's help
                  </li>
                  <li>Testing and refining features during development</li>
                  <li>
                    Version control and pushing code to a remote repository
                  </li>
                  <li>
                    Deploying the app live and connecting it to a custom domain
                  </li>
                  <li>
                    A clear mental model of how ideas turn into working, live
                    products
                  </li>
                </ul>
              </Section>

              <Section title="Who this is for">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li>Absolute beginners (18+)</li>
                  <li>
                    Who feel overwhelmed by tutorials and fragmented advice
                  </li>
                  <li>
                    Non-developers who want to learn by doing, not memorising
                  </li>
                  <li>
                    Solo creators and founders who want to ship ideas quickly
                  </li>
                  <li>
                    Anyone curious about how modern web apps actually get built
                    and deployed
                  </li>
                </ul>
              </Section>

              <Section title="What you’ll walk away with">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li>
                    A working understanding of the full build-to-launch workflow using AI
                  </li>
                  <li>
                    Confidence to start and finish small projects on your own
                  </li>
                  <li>A repeatable process you can apply to future ideas</li>
                  <li>
                    Less fear of “breaking things” and more comfort
                    experimenting
                  </li>
                </ul>
              </Section>

              <Section title="Things to know">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li>
                    Tutorial conducted on weekends and/or Australian public
                    holidays.
                  </li>
                  <li>AEST Time Zone only.</li>
                  <li>No additional people in your own booking. Just you.</li>
                  <li>No recording during session.</li>
                </ul>
              </Section>
            </div>

            {/* RIGHT COLUMN — proof + action */}
            <div style={{ display: "grid", gap: 14 }}>
            <Section title="Some projects I’ve built">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                    <li><a href="https://featureless.app" target="_blank" rel="noreferrer">featureless.app</a></li>
                    <li><a href="https://shareyourkofi.com" target="_blank" rel="noreferrer">shareyourkofi.com</a></li>
                    <li><a href="https://purpledinobooks.com" target="_blank" rel="noreferrer">purpledinobooks.com</a></li>
                    <li><a href="https://theredboxtees.com" target="_blank" rel="noreferrer">theredboxtees.com</a></li>
                    <li><a href="https://manojspeaks.com" target="_blank" rel="noreferrer">manojspeaks.com</a></li>
                </ul>
            </Section>

              <Section title="My Experience">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li>Been exploring the world wide web for decades!</li>
                  <li>Graduated from a coding bootcamp course</li>
                  <li>Built my own web apps and websites that are LIVE! See the homepage for links.</li>
                </ul>
              </Section>

              <Section title="How much">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li>
                    <strong>US$65 / A$100 only.</strong> 2026 Introductory
                    price!
                  </li>
                  <li>
                    Payments handled securely by Stripe on my{" "}
                    <strong>The Leap</strong> profile link below.
                  </li>
                </ul>
              </Section>

              <Section title="Next step">
                <div className="buttons">
                  <ButtonLink
                    href="https://theleap.co/@manoj/coaching/quickly-build-launch-a-web-app"
                    variant="primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book your 1-on-1 session now!
                  </ButtonLink>
                </div>

                <p className="small" style={{ marginTop: 10 }}>
                  Once the appointment & payment completed above, I will email you with how we connect on the day. We will use Zoom, Teams, Google Hangouts or something
                  else to connect virtually.
                </p>
              </Section>
            </div>
          </main>

          <footer className="footer">
            <div className="small">
              © {new Date().getFullYear()} Manoj Kumar
            </div>
            <div className="small">Beginner-friendly · No hype · Human-led</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
