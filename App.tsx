
import React, { useState } from 'react';
import { RESUME_DATA } from './constants';
import SkillsChart from './components/SkillsChart';

type TabType = 'sobre' | 'experiencia' | 'habilidades' | 'projetos' | 'educação';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('sobre');

  const renderContent = () => {
    switch (activeTab) {
      case 'sobre':
        return (
          <div className="animate-in space-y-8">
            <h2 className="text-3xl font-black text-white mb-6">Sobre Mim</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                {RESUME_DATA.about}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors">
                  <h4 className="font-bold text-white mb-1 text-lg">Visão</h4>
                  <p className="text-slate-400 text-sm">Focado em entregar código limpo e escalável para problemas complexos.</p>
                </div>
                <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                  <h4 className="font-bold text-white mb-1 text-lg">Localização</h4>
                  <p className="text-slate-400 text-sm">São Paulo, Brasil (Disponível para remoto global)</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'experiencia':
        return (
          <div className="animate-in space-y-8">
            <h2 className="text-3xl font-black text-white mb-8">Experiência Profissional</h2>
            <div className="space-y-10">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-10 border-l-2 border-slate-800">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full gradient-bg ring-4 ring-slate-900 shadow-xl shadow-indigo-500/20"></div>
                  <div className="mb-2">
                    <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-white mt-3">{exp.role}</h3>
                    <p className="text-slate-400 font-semibold">{exp.company}</p>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-500 text-sm flex gap-3">
                        <span className="shrink-0 text-indigo-500 font-bold">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'habilidades':
        return (
          <div className="animate-in space-y-8">
            <h2 className="text-3xl font-black text-white mb-6">Habilidades & Competências</h2>
            <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 shadow-xl mb-8">
              <SkillsChart />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {RESUME_DATA.skills.map(skill => (
                <div key={skill.name} className="flex flex-col gap-2 p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-slate-300 uppercase tracking-wider">{skill.name}</span>
                    <span className="text-[10px] font-bold text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div className="gradient-bg h-full rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'projetos':
        return (
          <div className="animate-in space-y-8">
            <h2 className="text-3xl font-black text-white mb-8">Projetos em Destaque</h2>
            <div className="space-y-6">
              {RESUME_DATA.projects.map((project, idx) => (
                <div key={idx} className="bg-slate-800/30 border border-slate-800/50 rounded-3xl p-8 hover:border-indigo-500 transition-all group flex flex-col shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h3 className="text-2xl font-black text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-black tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500/30 pl-6 mb-8">
                    <p className="text-slate-400 text-base leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-800">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-black text-indigo-400 flex items-center gap-2 hover:text-white transition-all uppercase tracking-widest group/btn">
                      <span className="bg-indigo-500/10 p-2 rounded-lg group-hover/btn:bg-indigo-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </span>
                      Explorar Código-Fonte
                    </a>
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Public Project</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'educacao':
        return (
          <div className="animate-in space-y-8">
            <h2 className="text-3xl font-black text-white mb-8">Formação Acadêmica</h2>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex gap-6 p-8 bg-slate-800/40 rounded-3xl border border-slate-700/50 items-center group hover:bg-slate-800/60 transition-all">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{edu.degree}</h3>
                    <p className="text-indigo-400 font-bold">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-black">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row p-4 md:p-8 lg:p-12 gap-6 overflow-hidden max-h-screen">
      
      {/* Sidebar - FIXED LEFT SIDE */}
      <aside className="w-full md:w-80 lg:w-96 bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl flex flex-col p-8 shrink-0 overflow-y-auto custom-scrollbar">
        <div className="w-44 h-44 rounded-[24px] overflow-hidden mb-8 shadow-2xl ring-4 ring-slate-800 self-center">
          <img 
            src="/profile.jpeg" 
            alt={RESUME_DATA.name} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
          />
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white mb-1 tracking-tight">{RESUME_DATA.name}</h1>
          <p className="text-indigo-500 font-black text-[10px] uppercase tracking-[0.2em]">{RESUME_DATA.title}</p>
        </div>

        <div className="space-y-6 flex-1">
          <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Email</span>
              <a href={`mailto:${RESUME_DATA.email}`} className="text-sm font-bold text-slate-300 hover:text-indigo-400 transition-colors break-all">{RESUME_DATA.email}</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Telefone</span>
              <span className="text-sm font-bold text-slate-300">{RESUME_DATA.phone}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
            <a 
            href="/cv.pdf" 
            download="Curriculo_Tiago_Rodrigues.pdf"
            className="w-full gradient-bg text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-500/10 hover:scale-[1.02] transition-all text-center"
          >
            Download CV
          </a>
          <div className="flex gap-2">
            <a href="https://github.com/kage3f" target="_blank" className="flex-1 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all hover:border-slate-500">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/tiago-rodrigues-dev/" target="_blank" className="flex-1 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all hover:border-slate-500">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content - TABBED VIEW */}
      <main className="flex-1 bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Navigation Bar - Compact buttons to fit without scroll */}
        <nav className="p-4 border-b border-slate-800 flex flex-wrap gap-2 bg-slate-900/50 backdrop-blur-xl">
          {(['sobre', 'experiencia', 'projetos', 'habilidades', 'educacao'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                activeTab === tab 
                ? 'gradient-bg text-white border-transparent shadow-lg shadow-indigo-500/20' 
                : 'bg-slate-800/40 text-slate-500 border-slate-700/50 hover:border-slate-600 hover:text-slate-300'
              }`}
            >
              {tab === 'sobre' ? 'Sobre' : tab === 'experiencia' ? 'Experiência' : tab === 'projetos' ? 'Projetos' : tab === 'habilidades' ? 'Stack' : 'Educação'}
            </button>
          ))}
        </nav>

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto p-10 lg:p-14 scroll-smooth custom-scrollbar">
          {renderContent()}
        </div>

        {/* Mini Footer */}
        <footer className="px-10 py-5 border-t border-slate-800 flex justify-between items-center bg-slate-900/50">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full gradient-bg animate-pulse"></div>
             <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Disponível para Projetos</span>
          </div>
          <span className="text-[10px] text-slate-600 uppercase tracking-widest font-black">&copy; 2026</span>
        </footer>
      </main>

      {/* WhatsApp Button and AI Assistant */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* WhatsApp Button as Primary Action */}
        <a 
          href="https://wa.me/5517997282077" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-5 rounded-[24px] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-[10px] font-black uppercase tracking-widest">
            WhatsApp
          </span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.403.007 12.04c0 2.123.554 4.197 1.606 6.06L0 24l6.117-1.604a11.845 11.845 0 005.928 1.584h.005c6.637 0 12.038-5.403 12.041-12.04.002-3.218-1.248-6.242-3.515-8.508z"/>
          </svg>
        </a>

      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #334155; }
      `}</style>
    </div>
  );
};

export default App;
