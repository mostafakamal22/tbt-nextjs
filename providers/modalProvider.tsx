"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";

const ModalProvider: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { isOpen, closeModal, children, isFormModal } = useModal();

  const onChange = (open: boolean) => {
    if (!open) {
      closeModal();
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} isFormModal={isFormModal} onChange={onChange}>
      {children}
    </Modal>
  );
};

export default ModalProvider;
