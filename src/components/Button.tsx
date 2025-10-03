import { type ReactNode } from "react";

interface MyButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: MyButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log("Clic par défaut");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
