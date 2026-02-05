
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import { 
  PERSONAL_INFO, 
  EXPERIENCE, 
  PROJECTS, 
  SKILLS, 
  EDUCATION, 
  CERTIFICATIONS,
  PUBLICATIONS,
  CONFERENCES
} from './data';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-slate-950">
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-25 group-hover:opacity-40 transition duration-300 blur"></div>
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name}
                  className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl"
                />
              </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
                {PERSONAL_INFO.profile}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2"
                >
                  <i className="fa-brands fa-linkedin text-lg"></i> LinkedIn
                </a>
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <i className="fa-brands fa-github text-lg"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <Section id="education" title="Education" className="bg-white dark:bg-slate-950">
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm max-w-3xl">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{EDUCATION.school}</h4>
          <p className="text-slate-600 dark:text-slate-400 font-medium mb-4">{EDUCATION.degree}</p>
          <div className="flex justify-between items-end mt-8 border-t border-slate-200 dark:border-slate-800 pt-6">
            <div>
              <p className="text-sm text-slate-500">CGPA: <span className="font-bold text-slate-900 dark:text-white">{EDUCATION.cgpa}</span></p>
              <p className="text-xs text-slate-400 mt-1">{EDUCATION.location}</p>
            </div>
            <p className="text-sm font-bold text-slate-500">{EDUCATION.period}</p>
          </div>
        </div>
      </Section>

      {/* Work Experience */}
      <Section id="experience" title="Work Experience" className="bg-slate-50 dark:bg-slate-900/20">
        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 last:border-0 pb-12 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                </div>
                <div className="text-left md:text-right mt-2 md:mt-0">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{exp.period}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">{exp.location}</p>
                </div>
              </div>
              <div className="space-y-3">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex gap-4 items-start">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600/40 shrink-0"></span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Research & Publications */}
      <Section id="research" title="Research & Publications" className="bg-white dark:bg-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Publications</h3>
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 shadow-sm">
                <span className="text-[10px] font-bold text-blue-600 uppercase mb-2 block">{pub.date}</span>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{pub.title}</h4>
                <p className="text-slate-500 text-xs mb-4">{pub.authors}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 italic">{pub.venue}</p>
                <div className="flex gap-4">
                  {pub.pdfLink !== "#" && <a href={pub.pdfLink} className="text-blue-600 text-xs font-bold hover:underline">View PDF</a>}
                  {pub.doiLink !== "#" && <a href={pub.doiLink} className="text-blue-600 text-xs font-bold hover:underline">DOI Link</a>}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Conferences</h3>
            <div className="grid grid-cols-1 gap-4">
              {CONFERENCES.map((conf, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{conf.title}</h4>
                    <p className="text-xs text-slate-500">{conf.date} • {conf.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Arsenal */}
      <Section id="skills" title="Technical Arsenal" className="bg-slate-50 dark:bg-slate-900/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xs uppercase tracking-widest">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Projects */}
      <Section id="projects" title="Key Projects" className="bg-white dark:bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="flex flex-col rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all group shadow-sm">
              <div className="h-48 relative overflow-hidden">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="space-y-2 mb-6 flex-grow">
                  {project.description.map((desc, dIdx) => (
                    <p key={dIdx} className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">• {desc}</p>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  View Source <i className="fa-solid fa-arrow-right-long ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications" className="bg-slate-50 dark:bg-slate-900/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-award text-blue-600"></i>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <footer id="contact" className="pt-24 pb-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's connect</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Currently open to research collaborations and professional roles in NLP and MLOps.
          </p>
          <div className="flex justify-center flex-wrap gap-8 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-white transition-all text-2xl"><i className="fa-solid fa-envelope"></i></a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-slate-300 hover:text-white transition-all text-2xl"><i className="fa-brands fa-linkedin"></i></a>
            <a href={PERSONAL_INFO.github} target="_blank" className="text-slate-300 hover:text-white transition-all text-2xl"><i className="fa-brands fa-github"></i></a>
            <a href={PERSONAL_INFO.socials.stackoverflow} target="_blank" className="text-slate-300 hover:text-white transition-all text-2xl"><i className="fa-brands fa-stack-overflow"></i></a>
            <a href={PERSONAL_INFO.socials.medium} target="_blank" className="text-slate-300 hover:text-white transition-all text-2xl"><i className="fa-brands fa-medium"></i></a>
            <a href={PERSONAL_INFO.socials.twitter} target="_blank" className="text-slate-300 hover:text-white transition-all text-2xl"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
