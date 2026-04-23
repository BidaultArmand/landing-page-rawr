import React from "react";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTag: React.FC<SectionTagProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <span className="text-xs font-medium tracking-widest text-rawr-purple uppercase">
        {children}
      </span>
      <div className="w-8 h-1 bg-rawr-purple"></div>
    </div>
  );
};
