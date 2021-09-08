import React from 'react';
import _ from 'lodash';
import { Result } from 'antd';

import {classNames} from '../utils';

export default class FeedbackSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="hero">
              
                {/* {_.get(section, 'title', null) && (
                  <h2 className="section__title align-center">{_.get(section, 'title', null)}</h2>
                )} */}

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
}
