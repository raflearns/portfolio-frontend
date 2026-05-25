import { Mail } from 'lucide-react';
// Corrected paths pointing to the images directory
import profileImg from './assets/images/profiles/raf_profile.png';
import laundrifyImg from './assets/images/projects/laundrify.png';
import strandmatchImg from './assets/images/projects/strandmatch.png';
// Custom SVG for GitHub
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom SVG for LinkedIn
const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  return (
    <div className="bg-[#050810] min-h-screen text-slate-400 font-sans selection:bg-cyan-500/30">
      
      {/* Sticky Top Navigation for Single Column Layout */}
      <nav className="sticky top-0 z-50 bg-[#050810]/90 backdrop-blur-md border-b border-slate-800/50 w-full">
        <div className="mx-auto max-w-3xl px-6 py-4 flex justify-center gap-6 sm:gap-10 text-sm font-bold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#ama" className="hover:text-cyan-400 transition-colors">AMA</a>
        </div>
      </nav>

      {/* Main Single Column Container */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        
        {/* CENTERED HERO SECTION */}
        <header className="flex flex-col items-center text-center mb-24">
          <img 
            src={profileImg} 
            alt="Rafael Jr. Canalda" 
            className="h-40 w-40 rounded-full border-4 border-cyan-400/70 object-cover shadow-lg shadow-cyan-500/20 mb-6"
          />
          
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Rafael Jr. Canalda
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Aspiring SOC Analyst & Network System Administrator
          </h2>
          
          <p className="mt-6 max-w-lg leading-normal text-base">
            I build secure applications and leverage data analytics to defend and monitor network infrastructures.
          </p>

          {/* Centered Social Links */}
          <ul className="mt-8 flex items-center justify-center gap-6">
            <li>
              <a href="https://github.com/raflearns" target="_blank" rel="noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <GithubIcon size={28} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/rafaelcanalda" target="_blank" rel="noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon size={28} />
              </a>
            </li>
            <li>
              <a href="mailto:rafael.canalda@example.com" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Email</span>
                <Mail size={28} />
              </a>
            </li>
          </ul>
        </header>

        <main className="space-y-24">
          
          {/* ABOUT SECTION */}
          <section id="about" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-200 mb-6">About Me</h2>
            <div className="space-y-4 text-base">
              <p>
                Currently pursuing my Bachelor of Science in Information Technology at the University of Makati, I specialize in Information Network System Administration. My focus is on the intersection of software architecture and cybersecurity, aiming for a career as a SOC Analyst.
              </p>
              <p>
                I combine a strong foundation in Object-Oriented Programming with two years of hands-on data analytics experience. This unique blend allows me to not just build systems, but to analyze network traffic patterns, identify vulnerabilities, and proactively defend against threats. 
              </p>
              <p>
                Whether I'm setting up local BPO-style network topologies, testing internal computer components with a multimeter, or developing point-of-sale systems, I approach every technical challenge with a security-first mindset.
              </p>
            </div>
          </section>

          {/* SKILLS & TECH STACK SECTION */}
          <section id="skills" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-200 mb-6">Current Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                'HTML', 'CSS', 'Java', 'PHP', 'MySQL', 'Python', 
                'Excel', 'MS Office 360', 'Google Services / Docs'
              ].map((skill) => (
                <span key={skill} className="flex items-center rounded-full bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-400/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-200 mb-8">Projects</h2>
            
            <ul className="space-y-16">
              
              {/* Project 1: Predictive Modeling */}
              <li className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100">
                <div className="z-10 sm:col-span-3">
                  <div className="aspect-video w-full rounded-lg border-2 border-slate-700/50 bg-slate-800/50 flex items-center justify-center overflow-hidden transition-colors group-hover:border-cyan-400/50">
                    <img 
                      src={strandmatchImg} 
                      alt="StrandMatch Landing Page" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="z-10 sm:col-span-5">
                  <h3 className="font-bold text-xl leading-snug text-slate-200 hover:text-cyan-400 transition-colors mb-2">
                    Predictive Modeling
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Designed statistical models relying on two years of data analytics principles to forecast trends and process data sets. Specifically structured the logic to prioritize rules for discrete data sets rather than defaulting to interpolation, ensuring much higher accuracy in the resulting metrics.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    <li><div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">Python</div></li>
                    <li><div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">Excel</div></li>
                    <li><div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">MySQL</div></li>
                  </ul>
                </div>
              </li>

              {/* Project 2: Laundrify */}
              <li className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100">
                <div className="z-10 sm:col-span-3">
                  <div className="aspect-video w-full rounded-lg border-2 border-slate-700/50 bg-slate-800/50 flex items-center justify-center overflow-hidden transition-colors group-hover:border-cyan-400/50">
                    {/* Integrated Laundrify Image */}
                    <img 
                      src={laundrifyImg} 
                      alt="Laundrify POS Interface" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="z-10 sm:col-span-5">
                  <h3 className="font-bold text-xl leading-snug text-slate-200 hover:text-cyan-400 transition-colors mb-2">
                    Laundrify POS System
                  </h3>
                  <p className="text-sm leading-relaxed">
                    A specialized, standalone Point of Sale system developed for local laundry businesses. Built with a focus on safe, reliable transaction processing and local data management.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    <li><div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">Java</div></li>
                    <li><div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">OOP</div></li>
                    <li><div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">MySQL</div></li>
                  </ul>
                </div>
              </li>

            </ul>
          </section>

          {/* ASK ME ANYTHING SECTION */}
          <section id="ama" className="scroll-mt-24">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-slate-200 mb-4">Let's start a conversation.</h3>
              <p className="mb-6">
                I'm always open to discussing tech, cybersecurity, or career paths. Here are a few things you can ask me about:
              </p>
              <ul className="list-disc list-inside space-y-3 text-sm text-slate-300 mb-8 marker:text-cyan-400 text-left">
                <li>How I utilize data analytics principles to improve network defense mechanisms.</li>
                <li>My roadmap for transitioning into SOC Analyst roles within Metro Manila's tech hubs.</li>
                <li>My approach to Object-Oriented Programming and building Java standalone apps.</li>
                <li>Hardware troubleshooting, from thermal management to testing internal components.</li>
              </ul>
              
              <div className="text-center sm:text-left">
                <a href="mailto:rafael.canalda@example.com" className="inline-flex items-center px-8 py-3 rounded-lg bg-cyan-500 text-[#050810] font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25">
                  Send me a question
                </a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}