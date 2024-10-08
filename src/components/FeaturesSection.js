import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import {classNames, withPrefix, markdownify} from '../utils';
import SectionActions from './SectionActions';
import { Divider } from 'antd';

export default function FeaturesSection(props) {
    
    let section = _.get(props, 'section', null);

    return (
        <section className="section section--features">
          {_.get(section, 'title', null) && (
          <div className="container container--md align-center">
            <h2 className="section__title">{_.get(section, 'title', null)}</h2>
          </div>
          )}
          <div className="container container--lg">
            {_.map(_.get(section, 'features', null), (feature, feature_idx) => (        
            <div key={feature_idx}>
              <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
                {_.get(feature, 'image', null) && (
                <div className={classNames('cell', 'section__media', {'section__media--right': _.get(feature, 'image_position', null) === 'right'})}>
                  <img src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} width={350}/>
                </div>
                )}
                <div className="section__body cell">
                  {_.get(feature, 'title', null) && (
                    _.get(section, 'title', null) ? (
                    <h4 className="section__title">{_.get(feature, 'title', null)}</h4>
                    ) : 
                    <h2 className="section__title">{_.get(feature, 'title', null)}</h2>
                  )}
                  {_.get(feature, 'content', null) && (
                  <div className="section__copy">
                    {markdownify(_.get(feature, 'content', null))}
                  </div>
                  )}
                  {_.get(feature, 'actions', null) && (
                  <div className="section__actions btn-group">
                    <SectionActions {...props} actions={_.get(feature, 'actions', null)} />
                  </div>
                  )}
                </div>                  
              </div>
              {feature_idx < _.get(section, 'features', null).length - 1 && <Separator/>}
            </div>
            ))}
          </div>
        </section>
    );
}

const Separator = styled(Divider) `
  margin-bottom: 3.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`