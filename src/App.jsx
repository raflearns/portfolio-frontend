import { Mail } from 'lucide-react';
// We are importing the hero image you already have in your assets folder!
import heroImg from './assets/hero.png';

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
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* LEFT COLUMN: Sticky Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              
              {/* Profile Image with 50% border radius (rounded-full) matching the theme color */}
              <div className="mb-6">
                <img 
                  src={heroImg} 
                  alt="Rafael Jr. Canalda" 
                  className="h-32 w-32 rounded-full border-4 border-cyan-400/70 object-cover shadow-lg shadow-cyan-500/20"
                />
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Rafael Jr. Canalda
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Aspiring SOC Analyst & Network System Administrator
              </h2>
              
              {/* Working Social Links */}
              <ul className="mt-6 flex items-center gap-5">
                <li>
                  <a href="https://github.com/raflearns" target="_blank" rel="noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <GithubIcon size={26} />
                  </a>
                </li>
                <li>
                  {/* Replace this URL with your actual LinkedIn profile link */}
                  <a href="https://www.linkedin.com/in/raf-jrrc/" target="_blank" rel="noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinIcon size={26} />
                  </a>
                </li>
                <li>
                  {/* Replace this with your actual preferred email */}
                  <a href="mailto:rafael.canaldajr@gmail.com" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                    <span className="sr-only">Email</span>
                    <Mail size={26} />
                  </a>
                </li>
              </ul>

              <p className="mt-6 max-w-xs leading-normal">
                I build secure applications and leverage data analytics to defend and monitor network infrastructures.
              </p>

              {/* Navigation */}
              <nav className="nav hidden lg:block mt-16">
                <ul className="w-max">
                  <li>
                    <a className="group flex items-center py-3 hover:text-cyan-400 transition-colors" href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-cyan-400"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">About</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3 hover:text-cyan-400 transition-colors" href="#skills">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-cyan-400"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Tech Stack</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3 hover:text-cyan-400 transition-colors" href="#projects">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-cyan-400"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Projects</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3 hover:text-cyan-400 transition-colors" href="#ama">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-cyan-400"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Ask Me Anything</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* RIGHT COLUMN: Scrolling Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* ABOUT SECTION */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050810]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4">
                  Currently pursuing my Bachelor of Science in Information Technology at the University of Makati, I specialize in Information Network System Administration. My focus is on the intersection of software architecture and cybersecurity, aiming for a career as a SOC Analyst.
                </p>
                <p className="mb-4">
                  I combine a strong foundation in Object-Oriented Programming with two years of hands-on data analytics experience. This unique blend allows me to not just build systems, but to analyze network traffic patterns, identify vulnerabilities, and proactively defend against threats. 
                </p>
                <p>
                  Whether I'm setting up local BPO-style network topologies, testing internal computer components with a multimeter, or developing point-of-sale systems, I approach every technical challenge with a security-first mindset.
                </p>
              </div>
            </section>

            {/* SKILLS & TECH STACK SECTION */}
            <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050810]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Tech Stack</h2>
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-6 hidden lg:block">Current Tech Stack</h3>
              
              <div className="flex flex-wrap gap-3">
                {[
                  'HTML', 'CSS', 'Java', 'PHP', 'MySQL', 'Python', 
                  'Excel', 'MS Office 360', 'Canva'
                ].map((skill) => (
                  <span key={skill} className="flex items-center rounded-full bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-400/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050810]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>
              
              <ul className="group/list">
                
                {/* Project 1: Predictive Modeling */}
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg"></div>
                    
                    {/* Project Image Holder */}
                    <div className="z-10 sm:order-1 sm:col-span-2 mt-1">
                      <div className="aspect-video w-full rounded border-2 border-slate-700/50 bg-slate-800/50 flex items-center justify-center overflow-hidden transition-colors group-hover:border-cyan-400/50">
                        {/* Replace this div with an actual <img src="..." /> tag when you have a screenshot */}
                        <span className="text-xs font-semibold text-slate-500">IMAGE</span>
                      </div>
                    </div>

                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400 group/link text-base" href="#">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Predictive Modeling</span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Designed statistical models relying on two years of data analytics principles to forecast trends and process data sets. Specifically structured the logic to prioritize rules for discrete data sets rather than defaulting to interpolation, ensuring much higher accuracy in the resulting metrics.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-400">Python</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-400">Excel</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-400">MySQL</div></li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Project 2: Laundrify */}
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg"></div>
                    
                    {/* Project Image Holder */}
                    <div className="z-10 sm:order-1 sm:col-span-2 mt-1">
                      <div className="aspect-video w-full rounded border-2 border-slate-700/50 bg-slate-800/50 flex items-center justify-center overflow-hidden transition-colors group-hover:border-cyan-400/50">
                        <span className="text-xs font-semibold text-slate-500">IMAGE</span>
                      </div>
                    </div>

                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400 group/link text-base" href="#">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Laundrify POS System</span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        A specialized, standalone Point of Sale system developed for local laundry businesses. Built with a focus on safe, reliable transaction processing and local data management.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-400">Java</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-400">OOP</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-400">MySQL</div></li>
                      </ul>
                    </div>
                  </div>
                </li>

              </ul>
            </section>

            {/* ASK ME ANYTHING SECTION */}
            <section id="ama" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#050810]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Ask Me Anything</h2>
              </div>
              
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-200 mb-4">Let's start a conversation.</h3>
                <p className="mb-6">
                  I'm always open to discussing tech, cybersecurity, or career paths. Here are a few things you can ask me about:
                </p>
                <ul className="list-disc list-inside space-y-3 text-sm text-slate-300 mb-8 marker:text-cyan-400">
                  <li>How I utilize data analytics principles to improve network defense mechanisms.</li>
                  <li>My roadmap for transitioning into SOC Analyst roles within Metro Manila's tech hubs.</li>
                  <li>My approach to Object-Oriented Programming and building Java standalone apps.</li>
                  <li>Strategies for grinding to Mythic rank in Mobile Legends under 90 matches.</li>
                  <li>Hardware troubleshooting, from thermal management to testing internal components.</li>
                </ul>
                
                <a href="mailto:rafael.canalda@example.com" className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-500 text-[#050810] font-bold hover:bg-cyan-400 transition-colors">
                  Send me a question
                </a>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}