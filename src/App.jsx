import { useCallback, useState } from 'react';
import { Mail, Image as ImageIcon, ChevronDown, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/BrandIcons';
import Topology from './components/Topology';
import Lightbox from './components/Lightbox';
import profileImg from './assets/images/profiles/raf_profile.webp';
import {
  person,
  competitions,
  certifications,
  events,
  skills,
  projects,
  askMeAbout,
} from './data/profile';

const navLinks = [
  { href: '#record', label: 'Competitions' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const topologyNodes = [
  { id: 'ctf', href: '#record', label: 'Competitions', detail: `${competitions.length} CTF events`, port: 'eth0', x: 98, y: 72 },
  { id: 'certs', href: '#certifications', label: 'Certifications', detail: `${certifications.length} Cisco courses`, port: 'eth1', x: 462, y: 72 },
  { id: 'projects', href: '#projects', label: 'Projects', detail: `${projects.length} builds`, port: 'eth2', x: 98, y: 388 },
  { id: 'events', href: '#events', label: 'Summits', detail: `${events.length} certificates`, port: 'eth3', x: 462, y: 388 },
];

function Button({ href, children, variant = 'solid', ...rest }) {
  const base =
    'inline-flex items-center gap-2 rounded-lg px-5 py-3 text-[0.95rem] font-semibold transition-colors';
  const styles =
    variant === 'solid'
      ? 'bg-[var(--amber)] text-[var(--ink)] hover:bg-[#f6c566]'
      : 'border border-[var(--line-strong)] text-[var(--paper)] hover:border-[var(--steel)] hover:text-[var(--steel)]';
  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {children}
    </a>
  );
}

function ViewButton({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--steel)] hover:text-[var(--paper)] transition-colors"
    >
      <ImageIcon size={16} aria-hidden="true" />
      {children}
    </button>
  );
}

export default function App() {
  const [viewing, setViewing] = useState(null);
  const close = useCallback(() => setViewing(null), []);
  const email = person.email ? `mailto:${person.email}` : null;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(13,23,38,0.92)] backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <a href="#top" className="display text-[1.05rem] whitespace-nowrap">
            R. Canalda
          </a>
          <ul className="flex gap-5 overflow-x-auto text-sm font-medium sm:gap-7 [scrollbar-width:none]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="whitespace-nowrap text-[var(--fog)] hover:text-[var(--paper)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.08fr_1fr] lg:pt-20 lg:pb-28">
          <div>
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 text-sm text-[var(--paper)]">
              <span className="h-2 w-2 rounded-full bg-[var(--amber)]" aria-hidden="true" />
              1st runner-up, INFOTECH ’26 Cybersecurity
            </p>
            <h1 className="display text-[clamp(2.7rem,7vw,5.4rem)] leading-[0.95]">
              Rafael Jr.
              <br />
              Canalda
            </h1>
            <p className="mt-6 max-w-[34ch] text-[1.3rem] leading-snug text-[var(--paper)]">
              IT student training to become a penetration tester and cybersecurity engineer.
            </p>
            <p className="mt-4 max-w-[52ch]">
              I study Information Technology at the University of Makati, specializing in network system
              administration. I sharpen my skills in capture-the-flag competitions and back them up with Cisco
              networking and network defense coursework.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {person.resume && (
                <Button href={person.resume} target="_blank" rel="noreferrer">
                  <FileText size={18} aria-hidden="true" /> View my resume
                </Button>
              )}
              <Button href="#contact" variant={person.resume ? 'outline' : 'solid'}>
                Get in touch
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[560px]">
            <Topology photo={profileImg} nodes={topologyNodes} />
          </div>
        </section>

        {/* Competitions */}
        <section id="record" className="scroll-mt-20 border-t border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <div className="max-w-2xl">
              <h2 className="section-title">Competition record</h2>
              <p className="mt-3">Capture-the-flag competitions I’ve placed in.</p>
            </div>

            <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {competitions.map((c) => (
                <article key={c.id} className="grid gap-6 py-10 md:grid-cols-[13rem_1fr_auto] md:gap-10">
                  <div>
                    <p className="display text-[2rem] leading-none text-[var(--amber)]">{c.placement}</p>
                    <p className="mt-2 text-sm">{c.year}</p>
                  </div>

                  <div className="max-w-[60ch]">
                    <h3 className="text-xl font-semibold text-[var(--paper)]">{c.event}</h3>
                    <p className="mt-1 text-sm">
                      {c.host}. Team {c.team}.
                    </p>
                    <p className="mt-4">{c.summary}</p>
                    {c.stats.length > 0 && (
                      <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                        {c.stats.map((s) => (
                          <div key={s.label}>
                            <dt className="text-sm">{s.label}</dt>
                            <dd className="display text-2xl">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>

                  <div className="flex gap-3 md:flex-col">
                    {c.images.map((img) => (
                      <button
                        key={img.alt}
                        type="button"
                        onClick={() => setViewing(img)}
                        className="group overflow-hidden rounded-[10px] border border-[var(--line-strong)] hover:border-[var(--steel)] transition-colors"
                        aria-label={`View image: ${img.alt}`}
                      >
                        <img
                          src={img.src}
                          alt=""
                          loading="lazy"
                          className="h-28 w-36 object-cover sm:h-32 sm:w-44"
                        />
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-20 bg-[var(--raised)]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.4fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="section-title">Certifications</h2>
              <p className="mt-3 max-w-[38ch]">
                Course credentials from Cisco Networking Academy. Each certificate carries a QR code you can scan to
                verify it.
              </p>
            </div>

            <ul className="divide-y divide-[var(--line-strong)] border-y border-[var(--line-strong)]">
              {certifications.map((cert) => (
                <li key={cert.id} className="py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="text-lg font-semibold text-[var(--paper)]">{cert.title}</h3>
                    <p className="text-sm">Issued {cert.issued}</p>
                  </div>
                  <p className="mt-0.5 text-sm">{cert.issuer}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <ViewButton onClick={() => setViewing({ src: cert.image, alt: `${cert.title} certificate, ${cert.issuer}` })}>
                      View certificate
                    </ViewButton>
                    <details className="group w-full sm:w-auto [&_summary::-webkit-details-marker]:hidden">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-[var(--fog)] hover:text-[var(--paper)]">
                        What it covered
                        <ChevronDown size={16} className="transition-transform group-open:rotate-180" aria-hidden="true" />
                      </summary>
                      <ul className="mt-3 space-y-1.5 text-[0.95rem]">
                        {cert.covered.map((c) => (
                          <li key={c} className="flex gap-3">
                            <span className="mt-[0.7em] h-1 w-3 shrink-0 bg-[var(--steel)]" aria-hidden="true" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div id="events" className="scroll-mt-20 mx-auto max-w-6xl px-5 pb-20 sm:px-8">
            <h3 className="text-xl font-semibold text-[var(--paper)]">Summits and participation</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {events.map((ev) => (
                <div key={ev.id} className="flex gap-5">
                  <button
                    type="button"
                    onClick={() => setViewing({ src: ev.image, alt: ev.imageAlt })}
                    className="shrink-0 overflow-hidden rounded-[8px] border border-[var(--line-strong)] hover:border-[var(--steel)] transition-colors"
                    aria-label={`View image: ${ev.imageAlt}`}
                  >
                    <img src={ev.image} alt="" loading="lazy" className="h-20 w-28 object-cover" />
                  </button>
                  <div>
                    <p className="font-semibold text-[var(--paper)]">{ev.title}</p>
                    <p className="text-sm">{ev.date}</p>
                    <p className="mt-1.5 text-[0.95rem] leading-snug">{ev.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="section-title">Skills</h2>
            <p className="mt-3 max-w-[56ch]">
              What I can do today, drawn from coursework, competitions and the systems I’ve built.
            </p>
            <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((s) => (
                <div key={s.group} className="border-t-2 border-[var(--amber)] pt-4">
                  <h3 className="font-semibold text-[var(--paper)]">{s.group}</h3>
                  <ul className="mt-3 space-y-1.5 text-[0.95rem]">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 border-t border-[var(--line)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="section-title">Projects</h2>
            <div className="mt-10 grid gap-12 md:grid-cols-2">
              {projects.map((p) => (
                <article key={p.id}>
                  <div className="aspect-video overflow-hidden rounded-[12px] border border-[var(--line-strong)] bg-[var(--raised)]">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--paper)]">{p.title}</h3>
                  <p className="mt-2 max-w-[56ch]">{p.description}</p>
                  <p className="mt-3 text-sm text-[var(--steel)]">Built with {p.tech.join(', ')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-[var(--raised)]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
            <div>
              <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02]">Let’s talk security</h2>
              <p className="mt-4 max-w-[46ch]">
                I’m open to conversations about internships, CTF teams and getting started in offensive security.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {person.resume && (
                  <Button href={person.resume} target="_blank" rel="noreferrer">
                    <FileText size={18} aria-hidden="true" /> Resume
                  </Button>
                )}
                {email && (
                  <Button href={email} variant={person.resume ? 'outline' : 'solid'}>
                    <Mail size={18} aria-hidden="true" /> Email me
                  </Button>
                )}
                <Button href={person.linkedin} variant={email || person.resume ? 'outline' : 'solid'} target="_blank" rel="noreferrer">
                  <LinkedinIcon size={18} aria-hidden="true" /> LinkedIn
                </Button>
                <Button href={person.github} variant="outline" target="_blank" rel="noreferrer">
                  <GithubIcon size={18} aria-hidden="true" /> GitHub
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--paper)]">Things you can ask me about</h3>
              <ul className="mt-4 space-y-3">
                {askMeAbout.map((q) => (
                  <li key={q} className="flex gap-3">
                    <span className="mt-[0.75em] h-1 w-3 shrink-0 bg-[var(--amber)]" aria-hidden="true" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-5 py-8 text-sm sm:px-8">
          <p>© 2026 {person.name}</p>
          <a href="#top" className="link">
            Back to top
          </a>
        </div>
      </footer>

      <Lightbox item={viewing} onClose={close} />
    </div>
  );
}
