'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, ArrowRight, Loader2, Info } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/client/dashboard');
    }, 1500);
  };

  const handleSSO = (provider: string) => {
    alert(`Redirection vers le SSO ${provider} en cours...`);
  };

  return (
    <div className="flex h-screen w-full font-sans overflow-hidden bg-slate-50 text-slate-900">
      
      {/* Left Half: Corporate Flat Brand Panel */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
        
        <div className="relative z-10 flex items-center gap-3 text-white">
          <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">Med Assurance</span>
        </div>

        <div className="relative z-10 mb-10">
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            Votre sécurité, <br /> notre priorité absolue.
          </h1>
          <p className="text-slate-400 text-lg max-w-md">
            Plateforme de gestion d'assurance d'entreprise. Connectez-vous pour accéder à vos contrats et déclarer vos sinistres.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-sm text-slate-500">
          <Info className="w-4 h-4" />
          <span>Application sécurisée (Chiffrement de bout en bout)</span>
        </div>
      </div>

      {/* Right Half: Login Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative bg-white">
        
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Connexion</h2>
            <p className="text-slate-500">Veuillez entrer vos identifiants professionnels.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-700">Adresse Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-3 text-sm text-slate-900 bg-slate-50 rounded border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" 
                placeholder="nom@entreprise.com" 
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-bold text-slate-700">Mot de passe</label>
              <input 
                type="password" 
                id="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full p-3 text-sm text-slate-900 bg-slate-50 rounded border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" 
                placeholder="••••••••" 
              />
            </div>

            <div className="flex justify-end">
              <button type="button" onClick={() => alert("Lien de réinitialisation envoyé !")} className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                Mot de passe oublié ?
              </button>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Authentification...
                </>
              ) : (
                <>
                  Se Connecter <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Visual Divider */}
          <div className="mt-8 flex items-center justify-between">
            <span className="w-1/5 border-b border-slate-200 lg:w-1/4"></span>
            <span className="text-xs text-center text-slate-500 uppercase font-bold">Ou continuer avec</span>
            <span className="w-1/5 border-b border-slate-200 lg:w-1/4"></span>
          </div>

          {/* SSO Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button 
              type="button" 
              onClick={() => handleSSO('Google')}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-300 rounded hover:bg-slate-50 text-sm font-bold text-slate-700 transition-colors"
            >
              Google
            </button>
            <button 
              type="button" 
              onClick={() => handleSSO('Microsoft')}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-300 rounded hover:bg-slate-50 text-sm font-bold text-slate-700 transition-colors"
            >
              Microsoft
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
