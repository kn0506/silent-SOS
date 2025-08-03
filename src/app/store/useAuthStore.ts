// store/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  isAuth: boolean;
  setAuth: (auth: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  // persist: Zustandの状態が自動的にlocalStorageに保存される。
  persist(
    (set) => ({
      isAuth: false,
      setAuth: (auth) => set({ isAuth: auth }),
      logout: () => set({ isAuth: false }),
    }),
    {
      name: 'auth-storage', // localStorage key
    }
  )
);