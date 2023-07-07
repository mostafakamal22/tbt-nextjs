import * as Dialog from "@radix-ui/react-dialog";
import { AiFillCloseCircle } from "react-icons/ai";

import "@/public/styles/modal.css";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => (
  <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent bg-emerald-50 scrollbar-thin scrollbar-thumb-emerald-200  scrollbar-track-transparent">
        {title && <Dialog.Title className="DialogTitle">{title}</Dialog.Title>}
        {description && (
          <Dialog.Description className="DialogDescription">
            {description}
          </Dialog.Description>
        )}
        {children}
        <Dialog.Close asChild>
          <button
            className="absolute right-1 top-3 hover:opacity-90 focus:opacity-90 focus-visible:outline-none"
            aria-label="Close"
          >
            <AiFillCloseCircle className="h-6 w-6 text-slate-600" size={16} />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
