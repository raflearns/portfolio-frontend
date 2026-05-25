import ImageContainer from '../common/ImageContainer';

export default function AdminSidebarProfile() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer border border-transparent hover:border-slate-700">
      <div className="w-12 h-12 flex-shrink-0">
        <ImageContainer 
          src="" // Intentionally blank to trigger the fallback UI
          alt="Rafael Jr. Canalda" 
          type="profile" 
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-200 tracking-wide">
          Rafael Jr. Canalda
        </span>
        <span className="text-xs font-mono text-cyan-500">
          SOC Analyst
        </span>
      </div>
    </div>
  );
}