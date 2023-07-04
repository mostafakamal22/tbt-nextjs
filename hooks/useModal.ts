import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  children: React.ReactNode;
  setChildren: (c: React.ReactNode) => void;
  title?: string | null;
  desc?: string | null;
}

const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  children: null,
  setChildren: (c) => set({ children: c }),
}));

export default useModal;
