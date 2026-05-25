import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyber-accent rounded-full blur-[128px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[128px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}

export default App;