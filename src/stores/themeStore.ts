// src/stores/themeStore.ts

import { create } from 'zustand';

interface ThemeState {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  themeColor: '#E0F2F1', // Default light teal color
  setThemeColor: (color) => set({ themeColor: color }),
}));

export default useThemeStore;