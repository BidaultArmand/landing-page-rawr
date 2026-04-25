'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: Array<{ label: string; onClick: () => void }>;
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {React.isValidElement(trigger)
          ? React.cloneElement(trigger as React.ReactElement<any>, {
              onClick: (e: React.MouseEvent) => {
                trigger.props?.onClick?.(e);
                setIsOpen(!isOpen);
              },
            })
          : trigger}
      </div>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 bg-white border border-[#E8E8E8] rounded-xl shadow-lg py-2 z-50 min-w-max"
          role="menu"
        >
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-normal text-[#333] hover:bg-[#F2F2F2] transition-colors duration-150"
              role="menuitem"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
