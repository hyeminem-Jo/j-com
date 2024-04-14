import { create } from 'zustand'

export const useModalStore = create((set) => ({
  modalList: [], // 열린 모달
  openModal: (modalName) =>
    set((state) => ({
      modalList: [...state.modalList, modalName], // 모달 추가 (모달 열림)
    })),
  closeModal: (modalName) =>
    set((state) => ({
      modalList: state.modalList.filter((name) => name !== modalName), // 모달 제거 (모달 닫힘)
    })),
}))
