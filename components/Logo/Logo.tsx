import Link from "next/link";
import s from "./Logo.module.scss";
interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <h1 className={s.logo}>
      <Link href="">Dusktopia</Link>
    </h1>
  );
};
