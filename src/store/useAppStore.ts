import { create } from 'zustand';

type UserRole = 'broker' | 'motorCarrier' | 'driver' | null;

interface AppState {
  userRole: UserRole;
  isLoggedIn: boolean;
  setUserRole: (role: UserRole) => void;
  login: () => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  userRole: null,
  isLoggedIn: false,
  setUserRole: (role) => set({ userRole: role }),
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
})); 