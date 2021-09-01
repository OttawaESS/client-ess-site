import React from "react";
// import { Collapse } from "antd";
import _ from "lodash";
// import styled from 'styled-components';

import { withPrefix } from "../utils";

// const { Panel } = Collapse;

export default class ImageSection extends React.Component {
    render() {
        let section = _.get(this.props, "section", null);
        return (
            <section className="section">
              <div className="container container--lg">
                {_.get(section, "image", null) && (
                    <img src={withPrefix(_.get(section, "image", null))} alt={_.get(section, "alt_image", null)} />
                )}
              </div>
            </section>
        );
    }
}