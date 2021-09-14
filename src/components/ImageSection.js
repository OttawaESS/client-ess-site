import React from "react";

import _ from "lodash";
import { withPrefix } from "../utils";


export default function ImageSection(props) {
    
    let section = _.get(props, "section", null);
    return (
        <section className="section">
          <div className="container container--lg align-center">
            {_.get(section, "image", null) && (
                <img src={withPrefix(_.get(section, "image", null))} alt={_.get(section, "alt_image", null)}/>
            )}
          </div>
        </section>
    );
}