// src/context/CookieConsentContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Chave que usaremos no localStorage
const CONSENT_STORAGE_KEY = 'nexa_cookie_consent';

type ConsentStatus = 'granted' | 'denied' | 'pending';

interface CookieConsentContextType {
  consentStatus: ConsentStatus;
  grantConsent: () => void;
  denyConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');

  // Ao carregar, verifica o localStorage
  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (storedConsent === 'granted') {
      setConsentStatus('granted');
    } else if (storedConsent === 'denied') {
      setConsentStatus('denied');
    } else {
      setConsentStatus('pending');
    }
  }, []);

  const grantConsent = () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'granted');
    setConsentStatus('granted');
  };

  const denyConsent = () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'denied');
    setConsentStatus('denied');
  };

  return (
    <CookieConsentContext.Provider value={{ consentStatus, grantConsent, denyConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};