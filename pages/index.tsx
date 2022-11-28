import cl from "classnames";
import s from "../styles/home.module.scss";
import { Logo } from "../components/Logo/Logo";
import { SocialNetworks } from "../components/SocialNetworks/SocialNetworks";
import { Title } from "../components/Title/Title";
import { Button } from "../components/Button/Button";

export default function Home() {
  return (
    <div>
      <section className={cl(s.section, s.sectionMain)}>
        <header>
          <Logo />
          <SocialNetworks />
          {/* <Button onClick={() => {}}>Whitepaper</Button> */}
        </header>
        {/* <Navigation /> */}
        <div>
          <Title>FROM DUSK TO DAWN</Title>
          <ul>
            <li>
              <Button>Mint</Button>
            </li>
            <li>
              <Button>Connect Wallet</Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
