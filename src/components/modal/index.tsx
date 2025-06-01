import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Overlay with blur effect */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-8 py-6">
          <h2 className="text-xl font-medium">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-8 py-6 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
