import React from 'react';
import _ from 'lodash';
import { Result } from 'antd';

import {classNames} from '../utils';

export default function FeedbackSection(props) {
    
    let section = _.get(props, 'section', null);

    return (
        <section className="hero">             
          {_.get(section, 'status', null) === 'success' && (
            <div className={classNames("container", {'container--md': _.get(section, 'container', null) === 'medium'}, {'container--lg': _.get(section, 'container', null) !== 'medium'})}>
              <Result
                status="success"
                title={_.get(section, 'title', null)}
                subTitle={<p>{_.get(section, 'message', null)}</p>}
              />
            </div>
          )}
 
          {_.get(section, 'status', null) === 'error' && (
            <div className={classNames("container", {'container--md': _.get(section, 'container', null) === 'medium'}, {'container--lg': _.get(section, 'container', null) !== 'medium'})}>
              <Result
                status="404"
                title={_.get(section, 'title', null)}
                subTitle={<p>{_.get(section, 'message', null)}</p>}
              />
            </div>
          )}
        </section>
    );
}
