import cl from "classnames";
import s from "../styles/home.module.scss";
import { Logo } from "../components/Logo/Logo";
import { SocialNetworks } from "../components/SocialNetworks/SocialNetworks";
import { Title } from "../components/Title/Title";
import { Button } from "../components/Button/Button";

export default function Home() {
  return (
    <div>
      <header className={s.header}>
        <Logo />

        <SocialNetworks />
        <Button onClick={() => {}}>Whitepaper</Button>
      </header>
      <section className={cl(s.section, s.sectionMain)}>
        {/* <Navigation /> */}
        <div>
          <Title>FROM DUSK TO&nbsp;DAWN</Title>
          <ul className={s.btnList}>
            <li>
              <Button onClick={() => {}}>Mint</Button>
            </li>
            <li>
              <Button onClick={() => {}}>Connect Wallet</Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
