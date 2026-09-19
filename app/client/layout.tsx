import React from 'react';
import SOSButton from '../components/SOSButton';
import Sidebar from '../components/Sidebar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <main className="flex-1 overflow-hidden relative">
        {children}
      </main>
      <SOSButton />
    </div>
  );
}
