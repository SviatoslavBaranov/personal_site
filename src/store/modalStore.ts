import { create } from 'zustand';

export type ModalType = 'freelance' | 'interview' | null;

type ModalState = {
  modal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modal: null,
  openModal: (type) => set({ modal: type }),
  closeModal: () => set({ modal: null }),
}));