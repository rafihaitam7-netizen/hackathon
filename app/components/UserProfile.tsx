'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Phone, Mail, BadgeCheck, ChevronUp, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative p-4 border-t border-slate-800 bg-slate-900/50">
      
      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-4 mb-2 w-64 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden z-50"
          >
            <div className="p-4 border-b border-slate-700 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                HR
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Haitam Rafi</h4>
                <p className="text-xs text-blue-400 font-medium">Courtier Senior</p>
              </div>
            </div>
            
            <div className="p-2">
              <div className="px-3 py-2 flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-slate-700/50">
                <BadgeCheck className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-semibold">My Account</span>
              </div>
              <div className="px-3 py-2 flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-slate-700/50">
                <Mail className="w-4 h-4 text-slate-500" />
                <span className="text-xs truncate">haitam.rafi@medassurance.ma</span>
              </div>
              <div className="px-3 py-2 flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-slate-700/50">
                <Settings className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-semibold">Settings</span>
              </div>
            </div>

            <div className="p-2 border-t border-slate-700">
              <button onClick={() => router.push('/login')} className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors text-sm font-bold">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold group-hover:bg-blue-600 transition-colors">HR</div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-white">Haitam Rafi</span>
            <span className="text-xs text-slate-400">En ligne</span>
          </div>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronUp className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
        </motion.div>
      </button>

    </div>
  );
}
