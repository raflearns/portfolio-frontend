import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AdminDashboard from './pages/AdminDashboard';

// A wrapper for the public landing page
function PublicLayout() {
  return (
    <main className="min-h-screen bg-[#050810] relative selection:bg-cyan-500/30">
      {/* Background ambient glow */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative z-10">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />} />
        
        {/* Protected Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Future routes: <Route path="/admin/projects" element={<ManageProjects />} /> */}
      </Routes>
    </Router>
  );
}