import { Activity, Users, Eye, ArrowUpRight, Shield } from 'lucide-react';
import Sidebar from '../components/layout/Sidebar';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Projects', value: '3', trend: '+1 this week', icon: Activity, color: 'text-cyan-400' },
    { label: 'Profile Views', value: '142', trend: '+12% vs last month', icon: Eye, color: 'text-purple-400' },
    { label: 'Security Alerts', value: '0', trend: 'System secure', icon: Shield, color: 'text-green-400' },
  ];

  return (
    <div className="min-h-screen bg-[#050810] flex">
      <Sidebar />
      
      {/* Main Content Area (offset by sidebar width) */}
      <main className="flex-1 md:ml-64 p-8">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Dashboard Overview</h1>
            <p className="text-slate-400 text-sm">Welcome back to your control center.</p>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-[#050810] font-bold py-2 px-4 rounded-lg text-sm transition-colors flex items-center">
            New Project <ArrowUpRight size={16} className="ml-2" />
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg bg-slate-800 ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">{stat.label}</span>
                <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for future Data Table */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 h-96 flex items-center justify-center backdrop-blur-sm">
          <p className="text-slate-500 font-mono text-sm">System Logs & Recent Activity Table Will Render Here</p>
        </div>
      </main>
    </div>
  );
}