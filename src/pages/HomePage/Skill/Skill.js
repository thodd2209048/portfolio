import clsx from "clsx";
import { skillList } from "~/utils/skillList";

import styles from "./Skill.module.scss";

Skill.propTypes = {};

function Skill({ skillRef }) {
  return (
    <>
      <div className="row py-3" ref={skillRef}>
        {skillList.map((item, index) => (
          <div
            key={index}
            className="col-6 col-md-3 d-flex justify-content-center"
          >
            <div
              className={clsx(styles.item, "mt-3 mt-sm-5 w-50")}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {item.picture}
              <h5 className="text-capitalize mt-2">{item.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skill;
