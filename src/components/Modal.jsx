import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Modal Content */}
      <div
        className="relative z-10 m-4 bg-white rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out scale-95"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "fadeInScale 0.3s ease-out forwards" }}
      >
        {children}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute -top-2 -right-2 h-8 w-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-500"
        >
          &times;
        </button>
      </div>
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default Modal;
