import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  href,
}) => {
  const baseStyles =
    "font-bold transition-all duration-300 inline-flex items-center justify-center";

  const variantStyles = {
    primary:
      "bg-rawr-purple text-rawr-white hover:shadow-glow hover:-translate-y-0.5",
    secondary:
      "border-2 border-rawr-black bg-transparent text-rawr-black hover:bg-rawr-black hover:text-rawr-white",
    ghost: "text-rawr-black underline hover:no-underline",
  };

  const sizeStyles = {
    sm: "px-6 py-2 text-sm rounded-pill",
    md: "px-8 py-3 text-base rounded-pill",
    lg: "px-10 py-4 text-lg rounded-pill",
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
