import { socialMediaList } from "~/utils/socialMediaList";

import clsx from "clsx";
import styles from "./SocialNav.module.scss";

SocialNav.propTypes = {};

function SocialNav(props) {
  return (
    <div>
      <nav data-aos="fade-up" data-aos-delay="200">
        <ul className="nav justify-content-left">
          {socialMediaList.map((item, index) => (
            <li className="nav-item">
              <a
                className={clsx(styles.navLink)}
                key={index}
                href={item.url}
                title={item.name}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SocialNav;
