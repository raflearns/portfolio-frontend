import { useCallback, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, ChevronDown, FileDown, Maximize2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/BrandIcons';
import Lightbox from './components/Lightbox';
import profileImg from './assets/images/profiles/raf_profile.webp';
import resumePreview from './assets/images/resume-preview.webp';
import { person, about, competitions, certifications, events, skills, projects } from './data/profile';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#competitions', label: 'Competitions' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#projects', label: 'Projects' },
];

const wrap = 'mx-auto w-full max-w-[86rem] px-5 sm:px-8 lg:px-12';

/* ---------- Small building blocks ---------- */

function RedactLine({ children, delay }) {
  const reduce = useReducedMotion();
  return (
    <span className="redact-line">
      {children}
      {!reduce && (
        <motion.span
          className="redact-bar"
          aria-hidden="true"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 0.7, delay, ease: [0.7, 0, 0.2, 1] }}
        />
      )}
    </span>
  );
}

function Btn({ href, children, tone = 'red', ...rest }) {
  const tones = {
    red: 'bg-[var(--red)] text-white hover:bg-[var(--red-deep)]',
    ink: 'bg-[var(--ink)] text-white hover:bg-black',
    line: 'border-2 border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white',
    white: 'border-2 border-white text-white hover:bg-white hover:text-[var(--red)]',
  };
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 px-5 py-3 font-semibold transition-colors ${tones[tone]}`}
      {...rest}
    >
      {children}
    </a>
  );
}

function Phase({ id, n, name, title, intro, night = false, children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 ${night ? 'night bg-[var(--ink)] text-[var(--night-muted)]' : 'border-t border-[var(--rule)]'}`}
    >
      <div className={`${wrap} grid gap-x-10 gap-y-8 py-20 lg:grid-cols-12 lg:py-28`}>
        <div className="min-w-0 lg:col-span-3">
          <p className={`mono ${night ? 'text-[var(--night-muted)]' : 'text-[var(--graphite)]'}`}>Phase {n}</p>
          <p className={`mono ${night ? 'text-[#ff6b5e]' : 'text-[var(--red)]'}`}>{name}</p>
        </div>
        <div className="min-w-0 lg:col-span-9">
          <h2 className="title max-w-[18ch]">{title}</h2>
          {intro && <p className="mt-5 max-w-[60ch] text-lg">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

export default function App() {
  const [viewing, setViewing] = useState(null);
  const close = useCallback(() => setViewing(null), []);
  const verified = skills.filter((s) => s.state === 'verified').length;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[var(--rule)] bg-[rgba(232,235,239,0.92)] backdrop-blur">
        <nav className={`${wrap} flex h-16 items-center justify-between gap-6`}>
          <a href="#top" className="heading text-lg tracking-tight">
            Rafael Canalda
          </a>
          <div className="flex items-center gap-7">
            <ul className="hidden gap-7 text-[0.95rem] font-medium md:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[var(--graphite)] hover:text-[var(--ink)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={person.resume}
              target="_blank"
              rel="noreferrer"
              className="bg-[var(--red)] px-4 py-2 text-[0.95rem] font-semibold text-white hover:bg-[var(--red-deep)] transition-colors"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero: the case file cover */}
        <section className={`${wrap} pt-8 pb-20 lg:pb-28`}>
          <div className="mono flex flex-wrap justify-between gap-2 border-b border-[var(--rule)] pb-3 text-[var(--graphite)]">
            <span>Case file {person.initials}-2026</span>
            <span>
              Status: <span className="text-[var(--red)]">open to internships</span>
            </span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <h1 className="name text-[24vw] lg:col-span-7 lg:text-[clamp(4.6rem,17vw,15.5rem)]" aria-label={person.name}>
              <RedactLine delay={0.2}>Rafael Jr.</RedactLine>
              <RedactLine delay={0.42}>Canalda</RedactLine>
            </h1>
            {/* Subject card */}
            <div className="lg:col-span-5 lg:pb-3">
              <div className="flex gap-6 border-2 border-[var(--ink)] bg-[var(--sheet)] p-5 sm:gap-7 sm:p-6">
                <div className="crop shrink-0 self-start">
                  <img
                    src={profileImg}
                    alt={`Portrait of ${person.name}`}
                    className="h-36 w-28 object-cover grayscale contrast-[1.1] transition-[filter] duration-300 hover:grayscale-0 sm:h-44 sm:w-36"
                  />
                </div>
                <dl className="mono grid content-start gap-y-2.5 text-[var(--ink)]">
                  {[
                    ['Subject', person.fullName],
                    ['Based in', person.location],
                    ['Best result', '1st runner-up, INFOTECH ’26'],
                    ['Latest', 'Cisco Ethical Hacker'],
                    ['Credentials', `${certifications.length} Cisco NetAcad`],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[var(--graphite)]">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="text-[var(--graphite)]">Phone</dt>
                    <dd>
                      <span className="redacted-text" aria-hidden="true">
                        xxxx xxx xxxx
                      </span>
                      <span className="sr-only">Withheld. Please reach out by email.</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-12 grid lg:mt-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="heading max-w-[24ch] text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.15]">
                Aspiring penetration tester and cybersecurity engineer.
              </p>
              <p className="mt-5 max-w-[54ch] text-lg">
                IT student at the University of Makati, majoring in Information Network Security. I learn by breaking
                things in capture-the-flag competitions and back it up with Cisco training, including the Ethical
                Hacker course.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href={person.resume} target="_blank" rel="noreferrer">
                  <FileDown size={19} aria-hidden="true" /> View my resume
                </Btn>
                <Btn href={`mailto:${person.email}`} tone="line">
                  <Mail size={19} aria-hidden="true" /> Email me
                </Btn>
              </div>
            </div>

          </div>
        </section>

        {/* Phase 01: About */}
        <Phase id="about" n="01" name="Reconnaissance" title="Who I am">
          <div className="mt-8 max-w-[62ch] space-y-5">
            <p className="text-[1.3rem] leading-relaxed text-[var(--ink)]">{about[0]}</p>
            {about.slice(1).map((p) => (
              <p key={p.slice(0, 20)} className="text-lg">
                {p}
              </p>
            ))}
          </div>
        </Phase>

        {/* Phase 02: Skills */}
        <Phase
          id="skills"
          n="02"
          name="Enumeration"
          title="What I can do"
          intro="Every skill below points to where I proved it: a certificate I earned, or a competition, project or job where I used it."
        >
          <div className="mt-10 bg-[var(--ink)] p-5 text-[var(--night-text)] sm:p-7">
            <p className="mono">
              <span className="text-[#ff6b5e]">rafael@umak</span>
              <span className="text-[var(--night-muted)]">:~$ </span>
              nmap -sV --top-skills rafael-canalda
            </p>
            <ul className="mono mt-5 sm:hidden">
              {skills.map((s) => (
                <li key={s.skill} className="border-t border-[var(--night-rule)] py-2.5">
                  <p>{s.skill}</p>
                  <p className="text-[var(--night-muted)]">
                    <span className={s.state === 'verified' ? 'text-[#ff6b5e]' : 'text-[var(--night-text)]'}>{s.state}</span>
                    {' '}via {s.source}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-5 hidden sm:block">
              <table className="mono w-full border-collapse text-left">
                <thead className="text-[var(--night-muted)]">
                  <tr>
                    <th className="pb-2 pr-6 font-medium">SKILL</th>
                    <th className="pb-2 pr-6 font-medium">STATE</th>
                    <th className="pb-2 font-medium">SOURCE</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((s) => (
                    <tr key={s.skill} className="border-t border-[var(--night-rule)]">
                      <td className="py-2 pr-6">{s.skill}</td>
                      <td className={`py-2 pr-6 ${s.state === 'verified' ? 'text-[#ff6b5e]' : 'text-[var(--night-text)]'}`}>
                        {s.state}
                      </td>
                      <td className="py-2 text-[var(--night-muted)]">{s.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mono mt-5 text-[var(--night-muted)]">
              {skills.length} skills found. {verified} verified by certificate, {skills.length - verified} applied in
              real work.
            </p>
          </div>
        </Phase>

        {/* Phase 03: Competitions */}
        <Phase
          id="competitions"
          n="03"
          name="Exploitation"
          title="Competition record"
          intro="Capture-the-flag competitions, where I put the theory to work against a clock."
          night
        >
          <div className="mt-12 space-y-16">
            {competitions.map((c) => (
              <article key={c.id} className="grid gap-8 border-t border-[var(--night-rule)] pt-10 md:grid-cols-12">
                <div className="md:col-span-5">
                  <button
                    type="button"
                    onClick={() => setViewing(c.images[0])}
                    className="group relative block w-full overflow-hidden"
                    aria-label={`View image: ${c.images[0].alt}`}
                  >
                    <img src={c.images[0].src} alt="" loading="lazy" className="aspect-square w-full object-cover" />
                    <span className="absolute right-3 bottom-3 grid h-9 w-9 place-items-center bg-[var(--red)] text-white opacity-90 group-hover:opacity-100">
                      <Maximize2 size={16} aria-hidden="true" />
                    </span>
                  </button>
                  {c.images.slice(1).map((img) => (
                    <button
                      key={img.alt}
                      type="button"
                      onClick={() => setViewing(img)}
                      className="mono mt-3 text-[var(--night-text)] underline decoration-[var(--red)] underline-offset-4 hover:text-white"
                    >
                      View participation certificate
                    </button>
                  ))}
                </div>
                <div className="md:col-span-7">
                  <p className="name text-[clamp(3.2rem,7vw,6rem)] !text-[#ff6b5e]">{c.placement}</p>
                  <h3 className="heading mt-5 text-2xl">{c.event}</h3>
                  <p className="mono mt-2">{c.host}</p>
                  <p className="mono">
                    {c.date}. Team {c.team}.
                  </p>
                  <p className="mt-5 max-w-[50ch] text-lg">{c.summary}</p>
                  {c.stats.length > 0 && (
                    <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-[var(--night-rule)] pt-6">
                      {c.stats.map((s) => (
                        <div key={s.label}>
                          <dd className="name text-[2.6rem] !text-[var(--night-text)]">{s.value}</dd>
                          <dt className="mt-1.5 text-sm">{s.label}</dt>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Phase>

        {/* Phase 04: Credentials */}
        <Phase
          id="credentials"
          n="04"
          name="Privilege escalation"
          title="Credentials and training"
          intro="Cisco Networking Academy courses, each with a Credly badge anyone can check."
        >
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {certifications.map((cert) => {
              const actions = (
                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-5 text-[0.95rem] font-semibold">
                  <button
                    type="button"
                    onClick={() => setViewing({ src: cert.image, alt: `${cert.title} certificate, ${cert.issuer}` })}
                    className={cert.featured ? 'text-[#ff6b5e] hover:text-white' : 'text-[var(--red)] hover:text-[var(--red-deep)]'}
                  >
                    View certificate
                  </button>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 ${cert.featured ? 'text-[var(--night-text)] hover:text-white' : 'text-[var(--ink)] hover:text-[var(--red)]'}`}
                    >
                      Verify on Credly <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              );

              if (cert.featured) {
                return (
                  <div key={cert.id} className="night flex flex-col border-t-4 border-[var(--red)] bg-[var(--ink)] p-6 text-[var(--night-muted)] sm:col-span-2 sm:p-8">
                    <p className="mono">
                      {cert.issuer}, {cert.issued}
                    </p>
                    <h3 className="heading mt-2 text-3xl">{cert.title}</h3>
                    <p className="mt-2 max-w-[56ch]">The full penetration testing process, from planning and recon to exploitation and the final report.</p>
                    <ul className="mt-6 grid gap-x-10 gap-y-2 text-[0.95rem] md:grid-cols-2">
                      {cert.covered.map((item) => (
                        <li key={item} className="flex gap-3 text-[var(--night-text)]">
                          <span className="mt-[0.65em] h-[3px] w-3 shrink-0 bg-[var(--red)]" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {actions}
                  </div>
                );
              }

              return (
                <div key={cert.id} className="flex flex-col border-t-4 border-[var(--red)] bg-[var(--sheet)] p-6">
                  <p className="mono text-[var(--graphite)]">
                    {cert.issuer}, {cert.issued}
                  </p>
                  <h3 className="heading mt-2 text-xl">{cert.title}</h3>
                  <details className="group mt-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[0.95rem] font-medium text-[var(--ink)] hover:text-[var(--red)]">
                      What it covered
                      <ChevronDown size={16} className="transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="mt-3 space-y-1.5 text-[0.95rem]">
                      {cert.covered.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-[0.65em] h-[3px] w-3 shrink-0 bg-[var(--red)]" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </details>
                  {actions}
                </div>
              );
            })}
          </div>

          <h3 className="heading mt-14 text-xl">Summits and participation</h3>
          <ul className="mt-5 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {events.map((ev) => (
              <li key={ev.id} className="flex flex-wrap items-center gap-x-6 gap-y-2 py-5">
                <div className="min-w-0 flex-1 basis-72">
                  <p className="font-semibold text-[var(--ink)]">{ev.title}</p>
                  <p className="text-[0.95rem]">{ev.detail}</p>
                </div>
                <p className="mono text-[var(--graphite)]">{ev.date}</p>
                <button
                  type="button"
                  onClick={() => setViewing({ src: ev.image, alt: ev.imageAlt })}
                  className="text-[0.95rem] font-semibold text-[var(--red)] hover:text-[var(--red-deep)]"
                >
                  View certificate
                </button>
              </li>
            ))}
          </ul>
        </Phase>

        {/* Phase 05: Projects */}
        <Phase
          id="projects"
          n="05"
          name="Persistence"
          title="Things I’ve built"
          intro="Software I designed and shipped, from an offline disaster app to a point-of-sale system."
        >
          <div className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.id} className={p.featured ? 'md:col-span-2' : ''}>
                <div className="aspect-video overflow-hidden border-2 border-[var(--ink)] bg-[var(--sheet)]">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className={p.featured ? 'mt-6 grid gap-x-10 gap-y-3 lg:grid-cols-[1fr_auto] lg:items-start' : 'mt-5'}>
                  <div>
                    <h3 className={`heading ${p.featured ? 'text-3xl' : 'text-2xl'}`}>{p.title}</h3>
                    <p className={`mt-2 ${p.featured ? 'max-w-[64ch] text-lg' : 'max-w-[52ch]'}`}>{p.description}</p>
                    <p className="mono mt-3 text-[var(--red)]">{p.tech.join(' / ')}</p>
                  </div>
                  {p.link && (
                    <Btn href={p.link} target="_blank" rel="noreferrer" tone="line">
                      <ExternalLink size={18} aria-hidden="true" /> Open {p.title}
                    </Btn>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Phase>

        {/* Phase 06: Reporting */}
        <section id="report" className="scroll-mt-16 bg-[var(--red)] text-white">
          <div className={`${wrap} grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
            <div className="lg:col-span-3 lg:self-start">
              <p className="mono text-white/75">Phase 06</p>
              <p className="mono">Reporting</p>
            </div>
            <div className="lg:col-span-5">
              <h2 className="title !text-white">The full report</h2>
              <p className="mt-5 max-w-[42ch] text-lg text-white/90">
                My one-page resume, with competitions, credentials, skills and education. Then let’s talk.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href={person.resume} tone="ink" target="_blank" rel="noreferrer">
                  <FileDown size={19} aria-hidden="true" /> Download resume
                </Btn>
                <Btn href={`mailto:${person.email}`} tone="white">
                  <Mail size={19} aria-hidden="true" /> Email me
                </Btn>
              </div>
              <ul className="mt-8 space-y-2">
                <li>
                  <a href={`mailto:${person.email}`} className="hover:underline underline-offset-4">
                    {person.email}
                  </a>
                </li>
                <li>
                  <a href={person.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                    <LinkedinIcon size={17} aria-hidden="true" /> linkedin.com/in/raf-jrrc
                  </a>
                </li>
                <li>
                  <a href={person.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                    <GithubIcon size={17} aria-hidden="true" /> github.com/raflearns
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-4">
              <a
                href={person.resume}
                target="_blank"
                rel="noreferrer"
                className="block bg-white p-2 shadow-[12px_12px_0_var(--ink)] transition-transform hover:-translate-y-1"
                aria-label="Open resume PDF"
              >
                <img src={resumePreview} alt="First page of Rafael’s resume" loading="lazy" className="w-full" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--ink)] text-[var(--night-muted)]">
        <div className={`${wrap} mono flex flex-wrap justify-between gap-3 py-7`}>
          <span>End of file.</span>
          <span>© 2026 {person.name}</span>
        </div>
      </footer>

      <Lightbox item={viewing} onClose={close} />
    </div>
  );
}
