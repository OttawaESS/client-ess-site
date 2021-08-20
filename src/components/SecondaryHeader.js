import React from "react";
import styles from "../sass/layouts/_secondary_header.module.scss";
import { Link } from "../utils/";
import _ from "lodash";

const SecondaryHeader = (props) => {
  const { nav_items, baseUrl } = _.get(props, "section", null);
  const pathname = window ? window.location.pathname : "";

  return (
    <div className={styles.container}>
      <div className={styles.headerStyles}>
        {nav_items.map(({ label, link }) => (
          <div
            className={`${styles.listItem} ${
              pathname.includes(link) ? styles.active : styles.inactive
            }`}
            key={`item-${label}`}
          >
            <Link to={`${baseUrl || ""}${link}`}>{label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryHeader;
