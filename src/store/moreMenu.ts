import { create } from 'zustand'

export const useMenuStore = create((set) => ({
  isMoreMenuOpen: false,
  setIsMoreMenuOpen: (newState) => set({ isMoreMenuOpen: newState }),
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}))
