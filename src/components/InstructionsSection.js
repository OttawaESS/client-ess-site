import React from "react";
import _ from "lodash";
import { Row, Col } from "antd";
import styles from "../sass/components/instructionsSection.module.scss";

const InstructionsSection = (props) => {
  const { important_note, instructions } = _.get(props, "section", null);
  return (
    <section className="section section--instruction">
      <div className="container container--lg">
        <Row className={styles.container} justify="center">
          <Col md={24} lg={14}>
            <Row>
              {instructions.map(({ title, description }, index) => (
                <Col span={24} key={`insturction-${index}`}>
                  <Row align="middle">
                    <Col className={styles.instructionNumberContainer}>
                      {index + 1}
                    </Col>
                    <Col>
                      <p className={styles.title}>{title}</p>
                    </Col>
                  </Row>
                  <p className={styles.description}>{description}</p>
                </Col>
              ))}
            </Row>
          </Col>
          {important_note && (
            <Col
              md={24}
              lg={10}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.importantNoteContainer}>
                <p className={styles.title}>Important Note</p>
                <p className={styles.importantNote}>{important_note}</p>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </section>
  );
};

export default InstructionsSection;
