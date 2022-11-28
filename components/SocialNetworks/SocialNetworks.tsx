import Link from "next/link";
import s from "./SocialNetworks.module.scss";
interface SocialNetworksProps {}
import cl from "classnames";

const socialNetworks = [
  {
    id: 1,
    className: "DisCord",
    link: "https://facebook.com",
  },
  {
    id: 2,
    className: "Twitter",
    link: "https://twitter.com",
  },
  {
    id: 3,
    className: "AntDesign",
    link: "https://ant.design",
  },
];

export const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
  return (
    <ul className={s.socialNetworks}>
      {socialNetworks.map((socialNetwork) => (
        <li key={socialNetwork.id} className={s.socialNetworksItem}>
          <a
            href={socialNetwork.link}
            target="blank"
            rel="noreferrer"
            className={cl(
              s.socialNetworksLink,
              s[`socialNetworks${socialNetwork.className}`]
            )}
          >
            {socialNetwork.className}
          </a>
        </li>
      ))}
    </ul>
  );
};
