'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, FileWarning, Search, ChevronRight, User, AlertTriangle, CloudDownload, Wrench, ShieldAlert } from 'lucide-react';

const mockIncidents = [
  { id: 'CAS-01', type: 'collision', title: 'Collision Mineure', date: 'Aujourd\'hui 14:30', client: 'Ahmed B.' },
  { id: 'CAS-02', type: 'breakdown', title: 'Panne Moteur', date: 'Aujourd\'hui 08:15', client: 'Karim O.' },
  { id: 'CAS-04', type: 'conflict', title: 'Accrochage', date: 'Hier 19:45', client: 'Sarah M.' },
];

export default function BrokerCRMView() {
  const [selectedIncident, setSelectedIncident] = useState(mockIncidents[0].id);
  const [showDuplicateAlert, setShowDuplicateAlert] = useState(false);

  // SCENARIO 05: Duplicate Import simulation
  const handleWebImport = () => {
    setShowDuplicateAlert(true);
    setTimeout(() => setShowDuplicateAlert(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex-1 flex overflow-hidden bg-slate-50 h-full font-sans text-slate-900"
    >
      
      {/* Left Pane: Incident Queue */}
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full shrink-0">
        <div className="p-4 border-b border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-slate-900">File d'attente</h2>
            {/* Scenario 05 Trigger */}
            <button 
              onClick={handleWebImport}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-2 py-1 rounded flex items-center gap-1 transition-colors border border-slate-300"
            >
              <CloudDownload className="w-3 h-3" /> Import
            </button>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un dossier..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {mockIncidents.map(incident => (
            <button 
              key={incident.id}
              onClick={() => setSelectedIncident(incident.id)}
              className={`w-full text-left p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors ${selectedIncident === incident.id ? 'bg-blue-50/50 border-l-4 border-l-blue-600' : 'border-l-4 border-l-transparent'}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-sm text-slate-800">{incident.id}</span>
                <span className="text-xs text-slate-500">{incident.date}</span>
              </div>
              <p className="text-xs text-slate-600 mb-2 flex items-center gap-1"><User className="w-3 h-3" /> {incident.client}</p>
              
              {/* SCENARIO 01 FLAG */}
              {incident.type === 'collision' && (
                <span className="inline-flex items-center gap-1 text-amber-700 text-xs font-semibold bg-amber-100 px-2 py-0.5 rounded">
                  <FileWarning className="w-3 h-3" /> Constat manquant
                </span>
              )}
              {/* SCENARIO 02 FLAG */}
              {incident.type === 'breakdown' && (
                <span className="inline-flex items-center gap-1 text-red-700 text-xs font-semibold bg-red-100 px-2 py-0.5 rounded">
                  <Wrench className="w-3 h-3" /> Droits non vérifiés
                </span>
              )}
              {/* SCENARIO 04 FLAG */}
              {incident.type === 'conflict' && (
                <span className="inline-flex items-center gap-1 text-purple-700 text-xs font-semibold bg-purple-100 px-2 py-0.5 rounded">
                  <AlertCircle className="w-3 h-3" /> Conflit données
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Right Pane: CRM Workspace */}
      <div className="flex-1 overflow-y-auto p-6 bg-slate-50 relative">
        
        {/* SCENARIO 05: Duplicate Alert Overlay */}
        {showDuplicateAlert && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-4 rounded-lg shadow-xl flex items-start gap-3 w-full max-w-lg border border-slate-700">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold">Alerte Duplication (Import Bloqué)</p>
              <p className="text-xs text-slate-300 mt-1">Le système a bloqué la création silencieuse d'un doublon. Une déclaration existe déjà pour la police AUTO-998822 à la date d'aujourd'hui.</p>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Header */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h1 className="text-xl font-bold text-slate-900 mb-1">Dossier {selectedIncident}</h1>
            <p className="text-sm text-slate-500 font-medium">Contrat: AUTO-998822 • Déclaration via Web IA</p>
          </div>

          {/* Module 3: Fraud Detection & Risk Triaging */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-blue-600" /> Risk & Fraud Analysis
            </h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              
              {/* Circular Indicator */}
              <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
                  <motion.circle 
                    cx="50" cy="50" r="40" 
                    stroke="#10b981" 
                    strokeWidth="8" 
                    fill="transparent" 
                    strokeDasharray="251.2" 
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: 251.2 - (251.2 * 12) / 100 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round" 
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-bold text-slate-800">12%</span>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase mt-0.5">Low Risk</span>
                </div>
              </div>

              {/* Timestamped Anomaly Checklist */}
              <div className="flex-1 w-full space-y-3">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-700">Heure de l'accident : 14h30 - Cohérent</p>
                    <p className="text-[10px] text-slate-500">Vérifié via métadonnées photo et télématique.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-700">Géolocalisation : Vérifiée</p>
                    <p className="text-[10px] text-slate-500">Coordonnées GPS correspondant au récit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-700">Véhicules impliqués : 2 - Standard</p>
                    <p className="text-[10px] text-slate-500">Pas de schéma de fraude en réseau détecté.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* DYNAMIC SCENARIO RENDER */}
          {selectedIncident === 'CAS-01' && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="text-amber-800 font-bold flex items-center gap-2 mb-2">
                <FileWarning className="w-5 h-5" /> Scénario 01 : Pièce Légale Manquante
              </h3>
              <p className="text-sm text-amber-700 font-medium">Le constat amiable est requis pour statuer sur les responsabilités (Code des assurances). Impossible d'indemniser sans ce document.</p>
            </div>
          )}

          {selectedIncident === 'CAS-02' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="text-red-800 font-bold flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5" /> Scénario 02 : Assistance Bloquée
              </h3>
              <p className="text-sm text-red-700 font-medium mb-3">Le client déclare une panne à Rabat et demande un remorquage. L'auto-approbation IA a été refusée.</p>
              <div className="bg-white border border-red-100 p-3 rounded text-sm">
                <strong>Motif du blocage :</strong> La clause "Assistance 0 km" n'est pas confirmée au contrat actuel. Une validation humaine est requise avant le déclenchement de la dépanneuse.
              </div>
            </div>
          )}

          {selectedIncident === 'CAS-04' && (
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="text-purple-800 font-bold flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5" /> Scénario 04 : Résolution de Conflit
              </h3>
              <div className="grid grid-cols-2 gap-4 bg-white border border-purple-100 rounded p-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold mb-1">Système Interne (Old CRM)</p>
                  <p className="text-sm font-semibold text-slate-800">Formule : Au Tiers</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold mb-1">Import Web (Nouvelle App)</p>
                  <p className="text-sm font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 inline-block rounded">Réclamation : Dommage Propre</p>
                </div>
              </div>
              <p className="text-sm text-purple-800 font-medium mt-3">L'IA n'a pas rejeté la réclamation d'elle-même, mais a levé ce flag pour que le gestionnaire tranche l'incohérence des droits.</p>
            </div>
          )}

          {/* AI Drafting (Human in the loop) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-slate-800 font-bold mb-3 flex items-center gap-2">
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">🤖 IA Assist</span> Communication Client (Brouillon)
            </h3>
            <p className="text-xs text-slate-500 mb-3 font-medium">L'IA a rédigé ce message basé sur le contexte. Le gestionnaire DOIT valider avant envoi.</p>
            
            <textarea 
              className="w-full h-24 p-3 bg-slate-50 border border-slate-300 rounded text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
              defaultValue={
                selectedIncident === 'CAS-01' ? "Bonjour Ahmed, pour traiter votre dossier de collision, nous avons impérativement besoin de la photo de votre constat amiable." :
                selectedIncident === 'CAS-02' ? "Bonjour Karim, nous analysons votre demande de remorquage à Rabat. Nous vérifions actuellement vos conditions d'assistance." :
                "Bonjour Sarah, il semble y avoir une anomalie concernant les garanties de votre contrat suite à votre déclaration. Nous vous contactons par téléphone."
              }
            />
            <div className="mt-4 flex justify-end">
              <button className="px-5 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors shadow flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Approuver & Envoyer
              </button>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
