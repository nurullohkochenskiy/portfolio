import create from 'zustand';

interface StoreState {
  language: 'en' | 'uz';
  setLanguage: (lang: 'en' | 'uz') => void;
}

const useLangStore = create<StoreState>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLangStore;
