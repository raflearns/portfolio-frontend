import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderGit2, Settings, LogOut, Shield } from 'lucide-react';
import ImageContainer from '../common/ImageContainer';

export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: FolderGit2, label: 'Manage Projects', path: '/admin/projects' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <aside className="w-64 bg-[#0B0F19] border-r border-slate-800 h-screen fixed left-0 top-0 flex flex-col hidden md:flex z-50">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Shield className="text-cyan-400 mr-2" size={24} />
        <span className="text-lg font-bold text-white tracking-widest uppercase text-sm">Admin Portal</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors group ${
                isActive 
                  ? 'bg-cyan-500/10 text-cyan-400' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <item.icon size={18} className="mr-3" />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile Widget (Bottom) */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer">
          <div className="w-10 h-10 flex-shrink-0">
            <ImageContainer src="" alt="Rafael Jr. Canalda" type="profile" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-semibold text-slate-200 truncate">Rafael Jr. Canalda</span>
            <span className="text-xs text-cyan-500 font-mono truncate">Superadmin</span>
          </div>
          <LogOut size={16} className="text-slate-500 ml-auto hover:text-red-400 transition-colors" />
        </div>
      </div>
    </aside>
  );
}