import React from "react";
import { Collapse } from "antd";
import _ from "lodash";
import styled from 'styled-components';

import { classNames, markdownify } from "../utils";

const { Panel } = Collapse;

export default function FaqSection(props) {
    
    let section = _.get(props, "section", null);
    return (
        <section className={classNames("section")}>
          <div className="container container--md">
            {_.get(section, "title", null) && (
                <h3 className="section__title align-center">
                    {_.get(section, "title", null)}
                </h3>
            )}
          </div>
          <div className="container container--lg">
            <div
              className={classNames(
                "flex",
                "flex--middle",
                "flex--center",
                "flex--col-2",
                "bg-gray"
              )}
            >
              <Accordion className="section__body cell" ghost>
                {_.map(_.get(section, "panels", null), (panel, panel_idx) => (
                  <Panel
                    header={_.get(panel, "header", null)}
                    key={panel_idx}
                  >
                    {markdownify(_.get(panel, "content", null))}
                  </Panel>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
    );
}

const Accordion = styled(Collapse)`
  .ant-collapse-header {
    font-weight: bold;
  }
`