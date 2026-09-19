'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Calendar, TrendingUp, AlertCircle, 
  FileText, Phone, Settings, Download, Clock, 
  Car, Wrench, CheckCircle, ChevronRight, FileSearch, X, Send, Check
} from 'lucide-react';
import Link from 'next/link';

export default function ClientDashboard() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [messageSent, setMessageSent] = useState(false);
  
  const closeModal = () => {
    setActiveModal(null);
    setTimeout(() => setMessageSent(false), 300);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  const currentDate = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  
  // Format "Aujourd'hui, 19 Septembre" style
  const formattedDate = currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50 h-full font-sans text-slate-900"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* 1. Header Section (Welcome & Context) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Bonjour, Haitam Rafi</h1>
            <p className="text-slate-500 capitalize">Aujourd'hui, {formattedDate}</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-emerald-700 text-sm">Couverture Active</span>
          </div>
        </div>

        {/* 2. KPI Metrics Row (Top Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-sm text-slate-500 font-semibold mb-1">Mes Contrats</p>
            <p className="text-2xl font-bold text-slate-900">2 <span className="text-sm font-medium text-slate-500">Actifs</span></p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
            <p className="text-sm text-slate-500 font-semibold mb-1">Prochain Paiement</p>
            <p className="text-2xl font-bold text-slate-900">450 <span className="text-sm font-medium text-slate-500">MAD</span></p>
            <p className="text-xs text-indigo-600 font-medium mt-1">Au 01 Octobre</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <p className="text-sm text-slate-500 font-semibold mb-1">Score de Conduite</p>
            <p className="text-2xl font-bold text-slate-900">92<span className="text-sm font-medium text-slate-500">/100</span></p>
            <p className="text-xs text-emerald-600 font-medium mt-1">Excellent - SafeDrive+</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <p className="text-sm text-slate-500 font-semibold mb-1">Sinistres en cours</p>
            <p className="text-2xl font-bold text-orange-600">1 <span className="text-sm font-medium text-orange-400">Dossier Ouvert</span></p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 3. Quick Actions Panel (Middle Grid - Left) */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-lg font-bold text-slate-800 mb-2">Actions Rapides</h2>
            
            <Link href="/client/urgence" className="w-full flex items-center gap-3 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-colors group">
              <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <span className="block font-bold text-sm">Déclarer un sinistre</span>
                <span className="text-blue-200 text-xs">Assistant IA 24/7</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>

            <button 
              onClick={() => setActiveModal('attestation')}
              className="w-full flex items-center gap-3 p-4 bg-white hover:bg-slate-50 text-slate-700 rounded-xl border border-slate-200 shadow-sm transition-colors group"
            >
              <div className="bg-slate-100 p-2 rounded-lg text-slate-500 group-hover:text-blue-600 transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left font-semibold text-sm">Attestation d'Assurance</span>
            </button>

            <button 
              onClick={() => setActiveModal('contact')}
              className="w-full flex items-center gap-3 p-4 bg-white hover:bg-slate-50 text-slate-700 rounded-xl border border-slate-200 shadow-sm transition-colors group"
            >
              <div className="bg-slate-100 p-2 rounded-lg text-slate-500 group-hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left font-semibold text-sm">Contacter mon Courtier</span>
            </button>

            <button 
              onClick={() => setActiveModal('modifier')}
              className="w-full flex items-center gap-3 p-4 bg-white hover:bg-slate-50 text-slate-700 rounded-xl border border-slate-200 shadow-sm transition-colors group"
            >
              <div className="bg-slate-100 p-2 rounded-lg text-slate-500 group-hover:text-blue-600 transition-colors">
                <Settings className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left font-semibold text-sm">Modifier mes garanties</span>
            </button>
          </div>

          {/* 4. Active Claims Tracker (Middle Grid - Right) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-bold text-slate-800 mb-2">Suivi de Sinistre</h2>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-[calc(100%-2.5rem)] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Dossier #SIN-01 <span className="text-sm font-normal text-slate-500">(Casablanca)</span></h3>
                    <p className="text-sm text-orange-600 font-semibold mt-1 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Expertise en cours
                    </p>
                  </div>
                  <button className="text-blue-600 text-sm font-bold hover:text-blue-700 flex items-center gap-1 transition-colors">
                    Voir les détails <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Simplified Mini-Timeline */}
                <div className="relative flex justify-between items-center mt-10 mb-4 px-2">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
                  <div className="absolute top-1/2 left-0 w-[40%] h-1 bg-blue-600 -translate-y-1/2 z-0" />
                  
                  {/* Step 1 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 mt-2">Déclaration</span>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center shadow-sm">
                      <FileSearch className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-blue-600 mt-2">Expertise</span>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center">
                      <Car className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 mt-2">Garage</span>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 mt-2">Réparations</span>
                  </div>

                  {/* Step 5 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 mt-2">Prêt</span>
                  </div>

                </div>
              </div>

              <div className="mt-8 bg-slate-50 rounded-lg p-4 border border-slate-100 flex items-start gap-3">
                <FileSearch className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">Dernière mise à jour (Hier, 15:30)</p>
                  <p className="text-xs text-slate-600 mt-1">L'expert a validé les dommages au pare-chocs avant. En attente du devis détaillé du garage partenaire "Auto Réparations Casa".</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 5. Recent Documents & Activity (Bottom Section) */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-800">Documents & Activité Récente</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            
            <div className="p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Constat Amiable_Upload.pdf</p>
                  <p className="text-xs text-slate-500">Ajouté il y a 2 jours • Dossier #SIN-01</p>
                </div>
              </div>
              <button className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-blue-50 rounded">
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Renouvellement Assurance Auto (TOYOTA RAV4)</p>
                  <p className="text-xs text-slate-500">Payé le 01 Septembre • Quittance générée</p>
                </div>
              </div>
              <button className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-blue-50 rounded">
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Mise à jour des coordonnées bancaires</p>
                  <p className="text-xs text-slate-500">Approuvée le 28 Août</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modals */}
        <AnimatePresence>
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={closeModal}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.95, y: 20 }} 
                className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
              >
                
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {activeModal === 'attestation' && (
                  <div className="p-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Attestation d'Assurance</h2>
                    <p className="text-slate-500 text-sm mb-6">Aperçu de votre document officiel valable jusqu'au 31/12/2026.</p>
                    
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center h-48 mb-6">
                      <Shield className="w-12 h-12 text-slate-300 mb-3" />
                      <p className="font-bold text-slate-400">Aperçu PDF Non Disponible</p>
                    </div>

                    <button 
                      onClick={closeModal}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" /> Télécharger (PDF)
                    </button>
                  </div>
                )}

                {activeModal === 'contact' && (
                  <div className="p-6">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Contacter mon Courtier</h2>
                    <p className="text-slate-500 text-sm mb-6">Envoyer un message direct à votre conseiller attitré.</p>
                    
                    {messageSent ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                          <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-emerald-800">Message Envoyé !</h3>
                        <p className="text-sm text-emerald-600 mt-1">Votre courtier vous répondra sous 2h ouvrées.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleContactSubmit}>
                        <div className="space-y-4 mb-6">
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Sujet</label>
                            <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option>Question sur mon contrat</option>
                              <option>Demande d'avenant</option>
                              <option>Suivi de sinistre</option>
                              <option>Autre demande</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                            <textarea 
                              required
                              rows={4} 
                              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                              placeholder="Écrivez votre message ici..."
                            />
                          </div>
                        </div>
                        <button 
                          type="submit"
                          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" /> Envoyer
                        </button>
                      </form>
                    )}
                  </div>
                )}

                {activeModal === 'modifier' && (
                  <div className="p-6">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Modifier mes garanties</h2>
                    <p className="text-slate-500 text-sm mb-6">Ajoutez des options à votre contrat AUTO-998822. Effet immédiat.</p>
                    
                    <div className="space-y-3 mb-8">
                      <label className="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <div>
                          <p className="font-bold text-slate-800 text-sm">Assistance 0 km</p>
                          <p className="text-xs text-slate-500">Dépannage même en bas de chez vous.</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-blue-600">+45 MAD/mois</span>
                          <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                        </div>
                      </label>
                      <label className="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <div>
                          <p className="font-bold text-slate-800 text-sm">Bris de glace sans franchise</p>
                          <p className="text-xs text-slate-500">Remplacement 100% pris en charge.</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-blue-600">+20 MAD/mois</span>
                          <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                        </div>
                      </label>
                    </div>

                    <button 
                      onClick={closeModal}
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center"
                    >
                      Simuler le nouveau tarif
                    </button>
                  </div>
                )}

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
