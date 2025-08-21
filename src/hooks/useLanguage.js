// src/hooks/useLanguage.js
"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [allTranslations, setAllTranslations] = useState({});
  
  // Load all translations on mount
  useEffect(() => {
    const loadAllTranslations = async () => {
      const supportedLanguages = ['en', 'si', 'ta']; // Your supported languages
      const translations = {};
      
      for (const lang of supportedLanguages) {
        try {
          const translation = await import(`../locales/${lang}.json`);
          translations[lang] = translation.default;
        } catch (error) {
          console.warn(`Translation file for ${lang} not found`);
        }
      }
      
      setAllTranslations(translations);
    };
    
    loadAllTranslations();
  }, []);
  
  // Translation function
  const t = (key) => {
    const currentTranslations = allTranslations[language] || allTranslations['en'] || {};
    const keys = key.split('.');
    let value = currentTranslations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
  
  const changeLanguage = (newLang) => {
    setLanguage(newLang);
  };
  
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}