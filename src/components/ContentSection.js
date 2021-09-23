import React from 'react';
import _ from 'lodash';

import {markdownify, classNames} from '../utils';

export default function ContentSection(props) {

    let section = _.get(props, 'section', null);

    return (
        <section className="section">
          <div className={classNames("container", {'container--md': _.get(section, 'container', null) === 'medium'}, {'container--lg': _.get(section, 'container', null) !== 'medium'}, {'align-center': _.get(section, 'align', null) === 'center'})}>
            {_.get(section, 'title', null) && (
            <h2 className="section__title align-center">{_.get(section, 'title', null)}</h2>
            )}
            {_.get(section, 'content', null) && (
            <div className="section__copy">
              {markdownify(_.get(section, 'content', null))}
            </div>
            )}
          </div>
        </section>
    );
}
