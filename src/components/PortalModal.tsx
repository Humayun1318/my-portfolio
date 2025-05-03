"use client";

import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const PortalModal = ({ children, isOpen, onClose }: PortalModalProps) => {
  if (typeof window === "undefined") return null;
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="" onClick={onClose}>
      <div className="" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default PortalModal;
