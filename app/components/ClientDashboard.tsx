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

  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
  
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
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Hello, Haitam Rafi</h1>
            <p className="text-slate-500 capitalize">Today, {formattedDate}</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-emerald-700 text-sm">Active Coverage</span>
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
            <p className="text-sm text-slate-500 font-semibold mb-1">Active Policies</p>
            <p className="text-2xl font-bold text-slate-900">2 <span className="text-sm font-medium text-slate-500">Active</span></p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
            <p className="text-sm text-slate-500 font-semibold mb-1">Upcoming Premium</p>
            <p className="text-2xl font-bold text-slate-900">450 <span className="text-sm font-medium text-slate-500">MAD</span></p>
            <p className="text-xs text-indigo-600 font-medium mt-1">Due Oct 1st</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <p className="text-sm text-slate-500 font-semibold mb-1">Driving Score</p>
            <p className="text-2xl font-bold text-slate-900">92<span className="text-sm font-medium text-slate-500">/100</span></p>
            <p className="text-xs text-emerald-600 font-medium mt-1">Excellent - SafeDrive+</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <p className="text-sm text-slate-500 font-semibold mb-1">Active Claims</p>
            <p className="text-2xl font-bold text-orange-600">1 <span className="text-sm font-medium text-orange-400">Open Case</span></p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 3. Quick Actions Panel (Middle Grid - Left) */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-lg font-bold text-slate-800 mb-2 truncate">Quick Actions</h2>
            
            <Link href="/client/urgence" className="w-full flex items-center gap-3 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-colors group">
              <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left truncate">
                <span className="block font-bold text-sm truncate">Report a Claim (AI)</span>
                <span className="text-blue-200 text-xs truncate">24/7 AI Assistant</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
            </Link>

            <button 
              onClick={() => setActiveModal('attestation')}
              className="w-full flex items-center gap-3 p-4 bg-white hover:bg-slate-50 text-slate-700 rounded-xl border border-slate-200 shadow-sm transition-colors group"
            >
              <div className="bg-slate-100 p-2 rounded-lg text-slate-500 group-hover:text-blue-600 transition-colors shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left font-semibold text-sm truncate">Download Certificate (PDF)</span>
            </button>

            <button 
              onClick={() => setActiveModal('contact')}
              className="w-full flex items-center gap-3 p-4 bg-white hover:bg-slate-50 text-slate-700 rounded-xl border border-slate-200 shadow-sm transition-colors group"
            >
              <div className="bg-slate-100 p-2 rounded-lg text-slate-500 group-hover:text-blue-600 transition-colors shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left font-semibold text-sm truncate">Contact Broker</span>
            </button>

            <button 
              onClick={() => setActiveModal('modifier')}
              className="w-full flex items-center gap-3 p-4 bg-white hover:bg-slate-50 text-slate-700 rounded-xl border border-slate-200 shadow-sm transition-colors group"
            >
              <div className="bg-slate-100 p-2 rounded-lg text-slate-500 group-hover:text-blue-600 transition-colors shrink-0">
                <Settings className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left font-semibold text-sm truncate">Manage Coverage</span>
            </button>
          </div>

          {/* 4. Active Claims Tracker (Middle Grid - Right) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-bold text-slate-800 mb-2 truncate">Active Claims Tracker</h2>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-[calc(100%-2.5rem)] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Claim #SIN-01 <span className="text-sm font-normal text-slate-500">(Casablanca)</span></h3>
                    <p className="text-sm text-orange-600 font-semibold mt-1 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Expert Assigned
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveModal('claim-details')}
                    className="text-blue-600 text-sm font-bold hover:text-blue-700 hover:underline flex items-center gap-1 transition-colors"
                  >
                    View Details <ChevronRight className="w-4 h-4" />
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
                    <span className="text-[10px] font-bold text-slate-800 mt-2 text-center w-16">Reported</span>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center shadow-sm">
                      <FileSearch className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 mt-2 text-center w-16">Expertise</span>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center">
                      <Car className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 mt-2 text-center w-16">Garage</span>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 mt-2 text-center w-16">Repairs</span>
                  </div>

                  {/* Step 5 */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 mt-2 text-center w-16">Ready</span>
                  </div>

                </div>
              </div>

              <div className="mt-8 bg-slate-50 rounded-lg p-4 border border-slate-100 flex items-start gap-3">
                <FileSearch className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">Last update (Yesterday, 15:30)</p>
                  <p className="text-xs text-slate-600 mt-1">The expert has validated the front bumper damage. Waiting for detailed estimate from partner garage "Auto Réparations Casa".</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 5. Recent Documents & Activity (Bottom Section) */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-800">Recent Documents & Activity</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            
            <div className="p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">E-Constat_Upload.pdf</p>
                  <p className="text-xs text-slate-500">Added 2 days ago • Claim #SIN-01</p>
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
                  <p className="text-sm font-bold text-slate-800">Auto Insurance Renewal (TOYOTA RAV4)</p>
                  <p className="text-xs text-slate-500">Paid Sept 1st • Receipt generated</p>
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
                  <p className="text-sm font-bold text-slate-800">Bank Details Update</p>
                  <p className="text-xs text-slate-500">Approved Aug 28th</p>
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

                {/* ATTESTATION MODAL */}
                {activeModal === 'attestation' && (
                  <div className="p-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Insurance Certificate</h2>
                    <p className="text-slate-500 text-sm mb-6">Preview of your official document valid until 12/31/2026.</p>
                    
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center h-48 mb-6">
                      <Shield className="w-12 h-12 text-slate-300 mb-3" />
                      <p className="font-bold text-slate-400">PDF Preview Not Available</p>
                    </div>

                    <button 
                      onClick={closeModal}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" /> Download (PDF)
                    </button>
                  </div>
                )}

                {/* CONTACT MODAL */}
                {activeModal === 'contact' && (
                  <div className="p-6">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Broker</h2>
                    <p className="text-slate-500 text-sm mb-6">Send a direct message to your assigned advisor.</p>
                    
                    {messageSent ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                          <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-emerald-800">Message Sent!</h3>
                        <p className="text-sm text-emerald-600 mt-1">Your broker will reply within 2 business hours.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleContactSubmit}>
                        <div className="space-y-4 mb-6">
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Subject</label>
                            <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option>Question about my policy</option>
                              <option>Coverage change request</option>
                              <option>Claim status update</option>
                              <option>Other request</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                            <textarea 
                              required
                              rows={4} 
                              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                              placeholder="Type your message here..."
                            />
                          </div>
                        </div>
                        <button 
                          type="submit"
                          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" /> Send Message
                        </button>
                      </form>
                    )}
                  </div>
                )}

                {/* MODIFIER MODAL */}
                {activeModal === 'modifier' && (
                  <div className="p-6">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Manage Coverage</h2>
                    <p className="text-slate-500 text-sm mb-6">Add options to your AUTO-998822 policy. Immediate effect.</p>
                    
                    <div className="space-y-3 mb-8">
                      <label className="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <div>
                          <p className="font-bold text-slate-800 text-sm">0 km Roadside Assistance</p>
                          <p className="text-xs text-slate-500">Towing even from your driveway.</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-blue-600">+45 MAD/mo</span>
                          <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                        </div>
                      </label>
                      <label className="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <div>
                          <p className="font-bold text-slate-800 text-sm">Zero Deductible Glass Breakage</p>
                          <p className="text-xs text-slate-500">100% replacement coverage.</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-blue-600">+20 MAD/mo</span>
                          <input type="checkbox" className="w-5 h-5 accent-blue-600" />
                        </div>
                      </label>
                    </div>

                    <button 
                      onClick={closeModal}
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center"
                    >
                      Simulate New Premium
                    </button>
                  </div>
                )}

                {/* CLAIM DETAILS MODAL */}
                {activeModal === 'claim-details' && (
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Claim #SIN-01 Status</h2>
                    <p className="text-slate-500 text-sm mb-6">Track the progress of your active claim.</p>

                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent mb-8">
                      
                      {/* Step 1 */}
                      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-slate-900">Claim Reported</h4>
                            <span className="text-xs font-semibold text-slate-400">Sep 18</span>
                          </div>
                          <p className="text-sm text-slate-500">Incident successfully registered via AI Assistant.</p>
                        </div>
                      </motion.div>

                      {/* Step 2 */}
                      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-blue-50 shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-blue-900">Expert Assigned</h4>
                            <span className="text-xs font-semibold text-blue-600">In Progress</span>
                          </div>
                          <p className="text-sm text-blue-700">Expert is reviewing your submitted damage report.</p>
                        </div>
                      </motion.div>

                      {/* Step 3 */}
                      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-200 bg-slate-50 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <Car className="w-4 h-4" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50">
                          <h4 className="font-bold text-slate-400">Vehicle at Garage</h4>
                        </div>
                      </motion.div>

                      {/* Step 4 */}
                      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-200 bg-slate-50 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <Wrench className="w-4 h-4" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50">
                          <h4 className="font-bold text-slate-400">Repairs Completed</h4>
                        </div>
                      </motion.div>
                    </div>

                    <button 
                      onClick={closeModal}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
                    >
                      Close
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
