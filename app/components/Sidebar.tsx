'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, AlertTriangle, BarChart3, Users, Settings } from 'lucide-react';
import UserProfile from './UserProfile';

export default function Sidebar() {
  const pathname = usePathname();

  // Helper function to check if a route is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 h-full">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white flex items-center gap-3 whitespace-nowrap">
          <span className="w-8 h-8 shrink-0 bg-blue-600 rounded-lg flex items-center justify-center text-sm">M</span>
          Med Assurance
        </h1>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/client/dashboard" 
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${isActive('/client/dashboard') ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400'}`}
            >
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </Link>
          </li>
          <li>
            <Link 
              href="/client/urgence" 
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${isActive('/client/urgence') ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400'}`}
            >
              <AlertTriangle className="w-5 h-5" /> Report a Claim (AI)
            </Link>
          </li>
          
          <li className="pt-4 pb-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider px-3">Manager Workspace</span>
          </li>
          
          <li>
            <Link 
              href="/broker/dashboard" 
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${isActive('/broker/dashboard') ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400'}`}
            >
              <BarChart3 className="w-5 h-5" /> Analytics & Reports
            </Link>
          </li>
          <li>
            <Link 
              href="/broker/crm" 
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${isActive('/broker/crm') ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400'}`}
            >
              <Users className="w-5 h-5" /> Broker CRM 360°
            </Link>
          </li>
        </ul>
      </nav>
      <UserProfile />
    </aside>
  );
}
