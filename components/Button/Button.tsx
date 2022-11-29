import Link from "next/link";
import s from "./Button.module.scss";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};
