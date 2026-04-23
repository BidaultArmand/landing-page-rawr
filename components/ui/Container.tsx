import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)] ${className}`}>
      {children}
    </div>
  );
};
