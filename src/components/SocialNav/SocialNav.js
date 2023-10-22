import { socialMediaList } from "~/utils/socialMediaList";

import clsx from "clsx";
import styles from "./SocialNav.module.scss";

SocialNav.propTypes = {};

function SocialNav(props) {
  return (
    <>
      <ul className="nav justify-content-left">
        {socialMediaList.map((item, index) => (
          <li key={index} className="nav-item">
            <a
              className={clsx(styles.navLink)}
              href={item.url}
              title={item.name}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SocialNav;
