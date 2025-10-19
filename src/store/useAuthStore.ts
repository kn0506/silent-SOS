import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthState {
  isAuth: boolean;
  setAuth: (auth: boolean) => void;
  logout: () => void;
}

/**
 * ログイン情報をローカルストレージに保存
 */
export const useAuthStore = create<AuthState>()(
  // persist: Zustandの状態が自動的にlocalStorageに保存される。
  persist(
    (set) => ({
      isAuth: false,
      setAuth: (auth) => set({ isAuth: auth }),
      logout: () => set({ isAuth: false }),
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);
