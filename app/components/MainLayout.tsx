'use client';

import React from 'react';
import { LayoutDashboard, FileText, AlertOctagon, Activity, Users, Settings } from 'lucide-react';
import SOSButton from './SOSButton';

interface MainLayoutProps {
  children: React.ReactNode;
  activeView: 'client-dashboard' | 'client-emergency' | 'broker-dashboard' | 'broker-crm';
  setActiveView: (view: 'client-dashboard' | 'client-emergency' | 'broker-dashboard' | 'broker-crm') => void;
}

export default function MainLayout({ children, activeView, setActiveView }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 font-sans text-slate-900">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">M</span>
            Med Assurance
          </h1>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li>
              <button 
                onClick={() => setActiveView('client-dashboard')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${activeView === 'client-dashboard' ? 'bg-slate-800 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                <LayoutDashboard className="w-5 h-5" /> Mon Espace (Client)
              </button>
            </li>
            <li className="pt-2 pb-2">
              <button 
                onClick={() => setActiveView('client-emergency')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${activeView === 'client-emergency' ? 'bg-blue-600 text-white shadow-md' : 'text-blue-400 hover:bg-slate-800'}`}
              >
                <AlertOctagon className="w-5 h-5" /> Déclarer un accident (IA)
              </button>
            </li>
            
            <li className="pt-6">
              <div className="px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Administration Broker</div>
              <button 
                onClick={() => setActiveView('broker-dashboard')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${activeView === 'broker-dashboard' ? 'bg-slate-800 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                <Activity className="w-5 h-5" /> Analytics & Revenus
              </button>
            </li>
            <li className="pt-1">
              <button 
                onClick={() => setActiveView('broker-crm')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${activeView === 'broker-crm' ? 'bg-slate-800 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                <Users className="w-5 h-5" /> CRM Broker 360°
              </button>
            </li>
          </ul>
        </nav>

        {/* User Profile Indicator */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">HR</div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Haitam Rafi</span>
                <span className="text-xs text-slate-400">En ligne</span>
              </div>
            </div>
            <button 
              onClick={() => alert("Ouverture du panneau des paramètres...")}
              className="text-slate-500 hover:text-white transition-colors" 
              aria-label="Paramètres"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col h-full overflow-hidden">
        {children}
        
        {/* Global Persistent SOS Button */}
        <SOSButton />
      </main>

    </div>
  );
}
