'use client';

import React, { useEffect } from 'react';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'left';
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  children,
  side = 'right',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const sideClasses = {
    top: 'top-[72px] left-0 right-0 h-auto max-h-[calc(100vh-72px)] rounded-b-2xl',
    right: 'top-[72px] right-0 bottom-0 w-full sm:w-80 rounded-l-2xl',
    left: 'top-[72px] left-0 bottom-0 w-full sm:w-80 rounded-l-2xl',
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sheet */}
      <div
        className={`fixed md:hidden bg-white z-50 transition-transform duration-300 overflow-y-auto ${sideClasses[side]} ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {children}
      </div>
    </>
  );
};
