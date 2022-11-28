import Link from "next/link";
import s from "./Title.module.scss";
import cl from "classnames";
import { ReactNode } from "react";
interface TitleProps {
  children: ReactNode;
  size?: "Medium" | "Large";
}

export const Title: React.FC<TitleProps> = ({ children, size = "Medium" }) => {
  return <h2 className={cl(s.title, s[`title${size}`])}>{children}</h2>;
};
