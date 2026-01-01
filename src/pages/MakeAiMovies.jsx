import React from "react";
import profileImg from "../assets/profile.png";
import Section from "../components/Section.jsx";
import ButtonLink from "../components/ButtonLink.jsx";

export default function MakeAiMovies() {
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
                      Make Your First AI Movie
                    </h1>
                    <p className="small" style={{ margin: "4px 0 0" }}>
                      Beginner-friendly · Human-led · No hype
                    </p>
                  </div>
                </div>

                <p className="summary" style={{ marginTop: 10 }}>
                  A beginner-friendly LIVE & 1-on-1 tutorial session to help you create your
                  first AI-generated short film - calmly, practically, and
                  without hype.
                </p>
              </Section>

              <Section title="What this is">
                <p className="body">
                  A 60-minute personal session where we walk through the entire
                  AI movie-making workflow - tools, prompts, scene generation,
                  motion, dialogues, and common beginner mistakes. I will also cover how to arrange them 
                  all in video editor to export as a movie file.
                </p>
              </Section>

              <Section title="Who this is for">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li>Absolute beginners (18+)</li>
                  <li>Curious creators and storytellers</li>
                  <li>People overwhelmed by AI tools</li>
                </ul>
              </Section>

              <Section title="What you’ll walk away with">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li>Your first AI-generated scene or video</li>
                  <li>A clear understanding of the workflow</li>
                  <li>Confidence to keep experimenting</li>
                </ul>
              </Section>

              <Section title="Things to know">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li>Tutorial conducted on weekends and/or Australian public holidays</li>
                  <li>AEST Time Zone only</li>
                  <li>No additional people in your own booking. Just you.</li>
                </ul>
              </Section>

            </div>

            {/* RIGHT COLUMN — proof + action */}
            <div style={{ display: "grid", gap: 14 }}>

              <Section title="Some clips from AI movies I’ve made">
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                  }}
                >
                  <iframe
                    src="https://youtu.be/KJDNvmlki_A"
                    title="AI movie collage"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    allowFullScreen
                  />
                </div>

                <p className="small" style={{ marginTop: 10 }}>
                  Created using AI tools - characters, scenes, dialogue,
                  motion, and mood.
                </p>
              </Section>

              <Section title="How much">
                <ul className="body" style={{ paddingLeft: 16, margin: 0 }}>
                  <li><strong>US$ 29 only.</strong> 2026 Introductory price!</li>
                  <li>You can <strong>pay after the completion</strong> of your tutorial! :) I want you to be satisfied before spending.</li>
                  <li>Payments handled securely by Stripe Payments.</li>
                </ul>
              </Section>

              <Section title="Next step">
                <div className="buttons">
                <ButtonLink
                href="https://tally.so/r/lbeeWX"
                variant="primary"
                target="_blank"
                rel="noreferrer"
                >
                    Contact me to schedule your 1-on-1 session
                </ButtonLink>
                </div>

                <p className="small" style={{ marginTop: 10 }}>
                  No prior experience required. If you can use a browser,
                  you’re good. We will use Zoom, Teams, Google Hangouts or something else to connect virtually.
                </p>
              </Section>


            </div>
            

          </main>

          <footer className="footer">
            <div className="small">
              © {new Date().getFullYear()} Manoj Kumar
            </div>
            <div className="small">
              Beginner-friendly · No hype · Human-led
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
