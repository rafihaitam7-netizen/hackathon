'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, X } from 'lucide-react';

export default function SOSButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="SOS Urgence"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-red-600 rounded-full shadow-2xl animate-pulse hover:bg-red-700 transition-colors focus:outline-none focus:ring-4 focus:ring-red-300"
      >
        <Phone className="w-8 h-8 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 text-center bg-red-50 border-b border-red-100">
                <h2 className="text-xl font-bold text-red-700 mb-2">Connexion immédiate au courtier...</h2>
                <div className="flex justify-center items-center gap-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-ping" />
                  <span className="text-red-600 font-medium">Appel en cours...</span>
                </div>
              </div>

              <div className="relative h-64 bg-slate-200">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-50 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Casablanca,Morocco&zoom=14&size=600x300&maptype=roadmap&sensor=false')] bg-cover bg-center" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute w-24 h-24 bg-blue-500 rounded-full"
                    />
                    <MapPin className="w-10 h-10 text-blue-600 relative z-10" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow text-sm">
                  <p className="font-semibold">Localisation détectée</p>
                  <p className="text-gray-600">Boulevard d&apos;Anfa, Casablanca</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
