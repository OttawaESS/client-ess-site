import React from "react";
import _ from "lodash";
import styles from "../sass/components/upcomingEvents.module.scss";

const UpcomingEvents = (props) => {
  const { calendar_link, agenda_link, title } = _.get(props, "section", null);

  return (
    <section className="section section--instruction">
      <div className={`container container--lg ${styles.calendar}`}>
        <p className={styles.title}>{title}</p>
        <div className={styles.big}>
          <iframe
            title="calendar-lg"
            src={calendar_link}
            height="675"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>

        <div className={styles.little}>
          <iframe
            title="calendar-sm"
            src={agenda_link}
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
