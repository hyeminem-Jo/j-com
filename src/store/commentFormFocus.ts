import { create } from 'zustand'

export const useCommentFormFocusStore = create((set) => ({
  isCommentFormFocus: false,
  setIsCommentFormFocus: (newState) => set({ isCommentFormFocus: newState }),
}))
