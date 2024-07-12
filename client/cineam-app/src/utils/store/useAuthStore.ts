import { redirect } from 'react-router-dom';
import { create } from 'zustand';

interface IUseAuthStore {
  auth: boolean;
  setAuth: () => void;
  exit: () => void;
}

export const useAuthStore = create<IUseAuthStore>(set => ({
  auth: JSON.parse(localStorage.getItem('auth') || 'false'),
  setAuth: () =>
    set(() => {
      localStorage.setItem('auth', JSON.stringify(true));
      return { auth: true };
    }),
  exit: () =>
    set(() => {
      localStorage.setItem('auth', JSON.stringify(false));
      return { auth: false };
    }),
}));
