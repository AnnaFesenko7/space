import Link from "next/link";
import s from "./Button.module.scss";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({}) => {
  return (
    <ul>
      <li>
        <Link href="">Dusktopia</Link>
      </li>
    </ul>
  );
};
