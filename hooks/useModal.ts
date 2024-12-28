import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  children: React.ReactNode;
  isFormModal?: boolean;
  openModal: () => void;
  closeModal: () => void;
  setChildren: (c: React.ReactNode) => void;
  setIsFromModal: (c: boolean) => void;
  title?: string | null;
  desc?: string | null;
}

const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  isFormModal: false,
  children: null,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setChildren: (c) => set({ children: c }),
  setIsFromModal: (t) => set({ isFormModal: t }),
}));

export default useModal;
