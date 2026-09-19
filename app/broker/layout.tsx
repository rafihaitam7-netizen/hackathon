import React from 'react';
import Sidebar from '../components/Sidebar';

export default function BrokerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <main className="flex-1 relative flex flex-col h-full overflow-hidden">
        {children}
      </main>
    </div>
  );
}
