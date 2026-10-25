import React from 'react';
import {
  PERSONAL,
  EDUCATION,
  PUBLICATIONS,
  RESEARCH,
  EXPERIENCE,
  PROJECTS,
  CONFERENCES,
  AWARDS,
  SKILLS,
} from './data';

/** Bold the author's own name in a comma-separated author list. */
function formatAuthors(authors: string): React.ReactNode {
  const name = PERSONAL.name;
  const parts = authors.split(new RegExp(`(${name})`, 'g'));
  return parts.map((part, i) =>
    part === name ? <strong key={i}>{part}</strong> : part
  );
}

const App: React.FC = () => {
  return (
    <div className="page">
      <header className="hero">
        <img
          className="avatar"
          src={PERSONAL.profileImage}
          alt={PERSONAL.name}
          width={140}
          height={140}
        />
        <div className="hero-text">
          <h1>{PERSONAL.name}</h1>
          <p className="tagline">{PERSONAL.tagline}</p>
          <p className="affiliation">
            {PERSONAL.affiliation} · {PERSONAL.location}
          </p>
          <nav className="links" aria-label="Profile links">
            <a href={PERSONAL.links.email}>Email</a>
            <span className="sep">·</span>
            <a href={PERSONAL.cv} target="_blank" rel="noreferrer">
              CV
            </a>
            <span className="sep">·</span>
            <a href={PERSONAL.links.scholar} target="_blank" rel="noreferrer">
              Google Scholar
            </a>
            <span className="sep">·</span>
            <a href={PERSONAL.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span className="sep">·</span>
            <a href={PERSONAL.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="about">
          <h2>About</h2>
          <p>{PERSONAL.bio}</p>
        </section>

        <section id="interests">
          <h2>Research Interests</h2>
          <p className="interests">
            {PERSONAL.interests.join(' · ')}
          </p>
        </section>

        <section id="publications">
          <h2>Publications</h2>
          <ol className="pub-list" reversed>
            {PUBLICATIONS.map((pub, idx) => (
              <li key={idx}>
                <span className="pub-authors">{formatAuthors(pub.authors)}.</span>{' '}
                <span className="pub-title">“{pub.title}.”</span>{' '}
                <em>{pub.venue}</em>, {pub.year}.
                {pub.note && (
                  <span className="pub-note"> ({pub.note})</span>
                )}
                {pub.links.length > 0 && (
                  <span className="pub-links">
                    {' '}
                    [
                    {pub.links.map((l, i) => (
                      <React.Fragment key={l.url}>
                        {i > 0 && ', '}
                        <a href={l.url} target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                      </React.Fragment>
                    ))}
                    ]
                  </span>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section id="research">
          <h2>Research Experience</h2>
          {RESEARCH.map((item, idx) => (
            <article key={idx} className="entry">
              <div className="entry-head">
                <h3>
                  {item.title}
                  {item.venueLink && (
                    <>
                      {' '}
                      <a
                        href={item.venueLink.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-link"
                      >
                        [{item.venueLink.label}]
                      </a>
                    </>
                  )}
                </h3>
                <span className="period">{item.period}</span>
              </div>
              <p className="org">
                {item.org}
                {item.location ? ` · ${item.location}` : ''}
              </p>
              <ul>
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="education">
          <h2>Education</h2>
          <article className="entry">
            <div className="entry-head">
              <h3>{EDUCATION.degree}</h3>
              <span className="period">{EDUCATION.period}</span>
            </div>
            <p className="org">
              {EDUCATION.school} (CGPA: <strong>{EDUCATION.cgpa}</strong>) ·{' '}
              {EDUCATION.location}
            </p>
            <ul>
              <li>
                <strong>Distinction:</strong> {EDUCATION.distinction}
              </li>
              <li>
                <strong>Relevant coursework:</strong> {EDUCATION.coursework}
              </li>
            </ul>
          </article>
        </section>

        <section id="experience">
          <h2>Teaching & Work Experience</h2>
          {EXPERIENCE.map((item, idx) => (
            <article key={idx} className="entry">
              <div className="entry-head">
                <h3>
                  {item.title}, {item.org}
                </h3>
                <span className="period">{item.period}</span>
              </div>
              {item.location && <p className="org">{item.location}</p>}
              <ul>
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="projects">
          <h2>Selected Projects</h2>
          {PROJECTS.map((p, idx) => (
            <article key={idx} className="entry">
              <div className="entry-head">
                <h3>
                  {p.title}
                  {p.link && (
                    <>
                      {' '}
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-link"
                      >
                        [GitHub]
                      </a>
                    </>
                  )}
                </h3>
              </div>
              <p className="org">{p.tech}</p>
              <ul>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills">
            {SKILLS.map((s) => (
              <li key={s.name}>
                <strong>{s.name}:</strong> {s.items}
              </li>
            ))}
          </ul>
        </section>

        <section id="talks">
          <h2>Talks</h2>
          <ul className="plain">
            {CONFERENCES.map((c, i) => (
              <li key={i}>
                <strong>{c.title}</strong> ({c.date}) — {c.detail}
              </li>
            ))}
          </ul>
        </section>

        <section id="awards">
          <h2>Awards & Leadership</h2>
          <ul className="plain">
            {AWARDS.map((a, i) => (
              <li key={i}>
                {a.link ? (
                  <a href={a.link} target="_blank" rel="noreferrer">
                    <strong>{a.title}</strong>
                  </a>
                ) : (
                  <strong>{a.title}</strong>
                )}
                {' — '}
                {a.detail}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {PERSONAL.name}. For PhD inquiries:{' '}
          <a href={PERSONAL.links.email}>{PERSONAL.email}</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
