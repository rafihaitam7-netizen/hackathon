'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertCircle, CheckCircle, Shield, Plus, 
  FileText, Clock, ChevronRight, CheckSquare 
} from 'lucide-react';

export default function BrokerDashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50 h-full font-sans"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Page Title (Header) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-1">Tableau de Bord</p>
            <h1 className="text-2xl font-bold text-slate-900">Bienvenue dans la démo Med Assurance</h1>
          </div>
          <span className="bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Vues MOCK
          </span>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Simulation</span>
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-1">Sinistres en cours</p>
            <h2 className="text-3xl font-bold text-slate-900">12</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Historique faux</span>
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-1">Dossiers clôturés</p>
            <h2 className="text-3xl font-bold text-slate-900">48</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Test local</span>
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-1">Polices gérées</p>
            <h2 className="text-3xl font-bold text-slate-900">3,492</h2>
          </div>

        </div>

        {/* Two-Column Dashboard Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Panel: Files de sinistres */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Files de sinistres</h2>
              <button 
                onClick={() => alert("Création d'un nouveau sinistre (Simulation)")}
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" /> Nouveau
              </button>
            </div>
            
            <div className="space-y-3">
              {/* Claim Card 1 */}
              <div className="p-4 border border-slate-100 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-sm text-slate-900">CAS-01 : Collision Mineure</span>
                  </div>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded">En cours</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-xs text-slate-500 font-medium">Ahmed B. • AUTO-998822</p>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>

              {/* Claim Card 2 */}
              <div className="p-4 border border-slate-100 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-sm text-slate-900">CAS-02 : Panne Moteur</span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">En attente</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-xs text-slate-500 font-medium">Karim O. • AUTO-112233</p>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Prochaines tâches */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-900">Prochaines tâches</h2>
            </div>
            
            <div className="space-y-4">
              {/* Task 1 */}
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5">
                  <CheckSquare className="w-5 h-5 text-slate-300 group-hover:text-blue-600 cursor-pointer transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Valider le constat amiable (CAS-01)</p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Échéance : Aujourd'hui, 17:00
                  </p>
                </div>
              </div>

              {/* Task 2 */}
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5">
                  <CheckSquare className="w-5 h-5 text-slate-300 group-hover:text-blue-600 cursor-pointer transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Vérifier l'assistance 0km (CAS-02)</p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Échéance : Demain, 10:00
                  </p>
                </div>
              </div>
              
              {/* Task 3 */}
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5">
                  <CheckSquare className="w-5 h-5 text-slate-300 group-hover:text-blue-600 cursor-pointer transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Approuver la réponse IA (CAS-04)</p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Échéance : Demain, 14:30
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
