'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertCircle, CheckCircle, Shield, Plus, 
  FileText, Clock, ChevronRight, CheckSquare, X
} from 'lucide-react';

export default function BrokerDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  const [claimType, setClaimType] = useState('Collision');

  const [claims, setClaims] = useState([
    {
      id: 'CAS-01',
      type: 'Collision Mineure',
      status: 'En cours',
      statusColor: 'orange',
      client: 'Ahmed B.',
      policy: 'AUTO-998822'
    },
    {
      id: 'CAS-02',
      type: 'Panne Moteur',
      status: 'En attente',
      statusColor: 'slate',
      client: 'Karim O.',
      policy: 'AUTO-112233'
    }
  ]);

  const handleCreateClaim = (e: React.FormEvent) => {
    e.preventDefault();
    const newClaim = {
      id: `CAS-0${claims.length + 1}`,
      type: claimType,
      status: 'Nouveau',
      statusColor: 'blue',
      client: clientName,
      policy: 'AUTO-XXXXXX'
    };
    setClaims([newClaim, ...claims]);
    setIsModalOpen(false);
    setClientName('');
    setClaimType('Collision');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50 h-full font-sans relative"
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
            <h2 className="text-3xl font-bold text-slate-900">{claims.length}</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Historique</span>
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
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" /> Nouveau
              </button>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              <AnimatePresence>
                {claims.map((claim) => (
                  <motion.div 
                    key={claim.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-4 border border-slate-100 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="font-bold text-sm text-slate-900">{claim.id} : {claim.type}</span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        claim.statusColor === 'orange' ? 'text-orange-600 bg-orange-100' :
                        claim.statusColor === 'blue' ? 'text-blue-600 bg-blue-100' :
                        'text-slate-500 bg-slate-200'
                      }`}>
                        {claim.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-end">
                      <p className="text-xs text-slate-500 font-medium">{claim.client} • {claim.policy}</p>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
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

      {/* NEW CLAIM MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="text-xl font-bold text-slate-900 mb-6">Créer un nouveau dossier</h2>
              
              <form onSubmit={handleCreateClaim} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Nom du Client</label>
                  <input 
                    type="text" 
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="ex: Hassan T."
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Type de Sinistre</label>
                  <select 
                    value={claimType}
                    onChange={(e) => setClaimType(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                  >
                    <option value="Collision">Collision</option>
                    <option value="Panne">Panne</option>
                    <option value="Bris de glace">Bris de glace</option>
                    <option value="Vol">Vol</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Générer le dossier
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
