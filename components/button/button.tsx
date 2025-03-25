import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      type={props.type || "button"}
      className={`button border-primary text-white hover:bg-hover cursor-pointer border px-3 py-1.5 ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
