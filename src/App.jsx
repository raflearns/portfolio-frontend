import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AdminDashboard from './pages/AdminDashboard';

// A simple layout for your public pages
const PublicLayout = ({ children }) => (
  <div className="bg-[#050810] min-h-screen text-white font-sans selection:bg-cyan-500/30">
    {children}
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Portfolio Route */}
        <Route path="/" element={
          <PublicLayout>
            <Hero />
            <Projects />
          </PublicLayout>
        } />

        {/* Secure Admin Route */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;