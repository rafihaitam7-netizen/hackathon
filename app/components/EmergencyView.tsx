'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, FileText, Upload, AlertTriangle, ScanLine, Stethoscope } from 'lucide-react';

type DamageZone = 'front' | 'rear' | 'left' | 'right';
type ScanState = 'idle' | 'scanning' | 'error';

export default function EmergencyView() {
  const [isRecording, setIsRecording] = useState(false);
  const [damagedZones, setDamagedZones] = useState<DamageZone[]>([]);
  const [scanState, setScanState] = useState<ScanState>('idle');
  const [isEmergencyEscalation, setIsEmergencyEscalation] = useState(false); // Scenario 03 Hard Stop

  const toggleZone = (zone: DamageZone) => {
    setDamagedZones(prev => 
      prev.includes(zone) ? prev.filter(z => z !== zone) : [...prev, zone]
    );
  };

  const handleUploadClick = () => {
    if (scanState !== 'idle') return;
    setScanState('scanning');
    setTimeout(() => {
      setScanState('error'); // Scenario 01: Missing signature
    }, 2500);
  };

  // SCENARIO 03: Injury case hard stop
  if (isEmergencyEscalation) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-red-50 p-8 text-center h-full">
        <Stethoscope className="w-24 h-24 text-red-600 mb-6 animate-pulse" />
        <h1 className="text-3xl font-bold text-red-700 mb-4 uppercase tracking-wide">Urgence Médicale Détectée</h1>
        <p className="text-lg text-red-900 font-medium max-w-xl mb-8 leading-relaxed">
          Le processus déclaratif automatisé est <strong>immédiatement suspendu</strong>. La sécurité et l'assistance corporelle sont notre priorité absolue. L'intelligence artificielle ne traite pas les dommages corporels.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <a href="tel:15" className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-red-700 shadow-md transition-colors w-full">
            📞 Contacter le SAMU (15)
          </a>
          <button onClick={() => setIsEmergencyEscalation(false)} className="text-red-600 font-medium text-sm underline mt-4">
            Annuler (Fausse alerte)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 sm:p-8 bg-slate-50 h-full overflow-y-auto">
      <div className="w-full max-w-3xl space-y-6">
        
        {/* Header with Safety Toggle (RESTORED COLOR) */}
        <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-white flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Déclaration d'Urgence</h2>
            <p className="text-blue-100 text-sm mt-1">Gagnez du temps. Ne tapez pas, parlez et touchez.</p>
          </div>
          
          {/* SCENARIO 03 TRIGGER */}
          <button 
            onClick={() => setIsEmergencyEscalation(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors border border-red-500 shadow-sm"
          >
            <AlertTriangle className="w-4 h-4" /> Signaler un blessé (Urgence)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Module 1: Visual Damage Selector */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
            <h3 className="font-bold text-slate-800 mb-2">Localisation des dommages</h3>
            <p className="text-xs text-slate-500 mb-6 text-center">Appuyez sur les zones touchées de la modélisation.</p>
            
            <div className="relative w-48 h-80 flex flex-col items-center">
              {/* Indicateur Avant */}
              <span className="text-[10px] font-bold uppercase text-slate-400 mb-2 tracking-widest">Avant</span>
              
              <svg viewBox="0 0 120 240" className="w-full h-full drop-shadow-xl overflow-visible">
                {/* Wheels */}
                <rect x="14" y="45" width="12" height="28" rx="4" fill="#1e293b" />
                <rect x="94" y="45" width="12" height="28" rx="4" fill="#1e293b" />
                <rect x="14" y="170" width="12" height="28" rx="4" fill="#1e293b" />
                <rect x="94" y="170" width="12" height="28" rx="4" fill="#1e293b" />

                {/* Base Shadow */}
                <rect x="24" y="20" width="72" height="200" rx="16" fill="#cbd5e1" />

                {/* FRONT ZONE (Hood + Bumper) */}
                <motion.path 
                  onClick={() => toggleZone('front')}
                  d="M 24,65 L 24,35 C 24,20 35,15 60,15 C 85,15 96,20 96,35 L 96,65 Z"
                  fill={damagedZones.includes('front') ? '#ef4444' : '#f8fafc'}
                  stroke={damagedZones.includes('front') ? '#b91c1c' : '#94a3b8'}
                  strokeWidth="2"
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer hover:brightness-95 transition-all"
                />
                {/* Headlights (Glowing) */}
                <path d="M 28,25 C 38,20 45,22 48,26 L 30,28 Z" fill="#fef08a" className="pointer-events-none drop-shadow-[0_0_4px_rgba(254,240,138,0.8)]" />
                <path d="M 92,25 C 82,20 75,22 72,26 L 90,28 Z" fill="#fef08a" className="pointer-events-none drop-shadow-[0_0_4px_rgba(254,240,138,0.8)]" />

                {/* REAR ZONE (Trunk + Bumper) */}
                <motion.path 
                  onClick={() => toggleZone('rear')}
                  d="M 24,175 L 24,205 C 24,220 35,225 60,225 C 85,225 96,220 96,205 L 96,175 Z"
                  fill={damagedZones.includes('rear') ? '#ef4444' : '#f8fafc'}
                  stroke={damagedZones.includes('rear') ? '#b91c1c' : '#94a3b8'}
                  strokeWidth="2"
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer hover:brightness-95 transition-all"
                />
                {/* Taillights */}
                <rect x="28" y="217" width="16" height="5" rx="2" fill="#ef4444" className="pointer-events-none drop-shadow-[0_0_3px_rgba(239,68,68,0.8)]" />
                <rect x="76" y="217" width="16" height="5" rx="2" fill="#ef4444" className="pointer-events-none drop-shadow-[0_0_3px_rgba(239,68,68,0.8)]" />

                {/* LEFT ZONE (Doors) */}
                <motion.path 
                  onClick={() => toggleZone('left')}
                  d="M 24,65 L 38,78 L 38,162 L 24,175 Z"
                  fill={damagedZones.includes('left') ? '#ef4444' : '#f8fafc'}
                  stroke={damagedZones.includes('left') ? '#b91c1c' : '#94a3b8'}
                  strokeWidth="2"
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer hover:brightness-95 transition-all"
                />

                {/* RIGHT ZONE (Doors) */}
                <motion.path 
                  onClick={() => toggleZone('right')}
                  d="M 96,65 L 82,78 L 82,162 L 96,175 Z"
                  fill={damagedZones.includes('right') ? '#ef4444' : '#f8fafc'}
                  stroke={damagedZones.includes('right') ? '#b91c1c' : '#94a3b8'}
                  strokeWidth="2"
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer hover:brightness-95 transition-all"
                />

                {/* CENTER / ROOF (Not Clickable, Just Glass and Roof) */}
                <path d="M 38,78 L 82,78 L 82,162 L 38,162 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" className="pointer-events-none" />
                
                {/* Windshield */}
                <path d="M 40,78 L 80,78 L 74,53 L 46,53 Z" fill="#334155" stroke="#1e293b" strokeWidth="1" className="pointer-events-none" />
                <path d="M 46,55 L 74,55 L 72,60 L 48,60 Z" fill="#475569" className="pointer-events-none opacity-50" /> {/* Glass reflection */}

                {/* Rear Window */}
                <path d="M 40,162 L 80,162 L 74,177 L 46,177 Z" fill="#334155" stroke="#1e293b" strokeWidth="1" className="pointer-events-none" />

                {/* Side Mirrors */}
                <path d="M 24,68 L 18,68 C 16,68 16,78 18,78 L 24,78 Z" fill="#475569" className="pointer-events-none" />
                <path d="M 96,68 L 102,68 C 104,68 104,78 102,78 L 96,78 Z" fill="#475569" className="pointer-events-none" />
              </svg>

              {/* Indicateur Arrière */}
              <span className="text-[10px] font-bold uppercase text-slate-400 mt-2 tracking-widest">Arrière</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Module 2: Voice-to-Text */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center flex-1">
              <h3 className="font-bold text-slate-800 mb-1">Description Vocale</h3>
              <p className="text-xs text-slate-500 mb-6 text-center">L'IA transcrira et structurera votre récit.</p>

              <div className="relative flex items-center justify-center w-full h-32">
                {isRecording && (
                  <>
                    <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute w-20 h-20 bg-blue-500 rounded-full" />
                  </>
                )}
                
                <button 
                  onMouseDown={() => setIsRecording(true)}
                  onMouseUp={() => setIsRecording(false)}
                  onTouchStart={() => setIsRecording(true)}
                  onTouchEnd={() => setIsRecording(false)}
                  className={`relative z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center text-white transition-colors ${isRecording ? 'bg-blue-800 scale-95' : 'bg-slate-900 hover:bg-slate-800'}`}
                >
                  <Mic className="w-8 h-8" />
                </button>
              </div>
              <p className={`mt-2 text-sm font-semibold ${isRecording ? 'text-blue-600' : 'text-slate-600'}`}>
                {isRecording ? "Écoute en cours..." : "Maintenir pour parler"}
              </p>
            </div>

            {/* Module 3: OCR Scanner (Scenario 01 hook) */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-600" /> Scanner E-Constat
                </h3>
              </div>
              
              <div className="p-4 flex flex-col items-center">
                <button 
                  onClick={handleUploadClick}
                  disabled={scanState !== 'idle'}
                  className="w-full relative h-32 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col items-center justify-center overflow-hidden cursor-pointer"
                >
                  {scanState === 'idle' && (
                    <>
                      <Upload className="w-8 h-8 text-slate-400 mb-2" />
                      <span className="text-sm text-slate-600 font-medium">Uploader le constat amiable</span>
                    </>
                  )}
                  
                  {scanState === 'scanning' && (
                    <>
                      <FileText className="w-12 h-12 text-blue-200" />
                      <motion.div initial={{ top: 0 }} animate={{ top: "100%" }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-1 bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)] z-10" />
                      <span className="absolute bottom-2 text-xs font-bold text-blue-600 bg-white px-2 py-1 rounded">Vérification de conformité...</span>
                    </>
                  )}
                  
                  {scanState === 'error' && (
                    <div className="absolute inset-0 bg-amber-50 flex flex-col items-center justify-center">
                      <ScanLine className="w-8 h-8 text-amber-500 mb-1" />
                      <span className="text-xs font-bold text-amber-700">Anomalie détectée</span>
                    </div>
                  )}
                </button>

                <AnimatePresence>
                  {scanState === 'error' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 w-full bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-amber-800">Signature manquante</p>
                        <p className="text-xs text-amber-700 mt-0.5 leading-tight">La signature de l'autre conducteur est absente. Le document ne sera pas recevable légalement.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
