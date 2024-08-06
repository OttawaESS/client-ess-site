import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import {classNames, withPrefix, markdownify} from '../utils';
import SectionActions from './SectionActions';

export default function TraditionSection(props) {
    
  let section = _.get(props, 'section', null);

  return (
      <section className="section section--traditions">
        {_.get(section, 'title', null) && (
        <div className="container container--md align-center">
          <h2 className="section__title">{_.get(section, 'title', null)}</h2>
        </div>
        )}
        <div className="container container--lg">
          {_.map(_.get(section, 'traditions', null), (tradition, tradition_idx) => (        
          <TraditionWrapper key={tradition_idx}>
            <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(tradition, 'align', null) === 'center', 'align-right': _.get(tradition, 'align', null) === 'right'})}>
              {_.get(tradition, 'image', null) && (
              <div className={classNames('cell', 'section__media', {'section__media--right': _.get(tradition, 'image_position', null) === 'right'})}>
                <img src={withPrefix(_.get(tradition, 'image', null))} alt={_.get(tradition, 'image_alt', null)} width={175}/>
              </div>
              )}
              <div className="section__body cell">
                {_.get(tradition, 'title', null) && (
                  _.get(section, 'title', null) ? (
                  <h4 className="section__title">{_.get(tradition, 'title', null)}</h4>
                  ) : 
                  <h2 className="section__title">{_.get(tradition, 'title', null)}</h2>
                )}
                {_.get(tradition, 'content', null) && (
                <div className="section__copy">
                  {markdownify(_.get(tradition, 'content', null))}
                </div>
                )}
                {_.get(tradition, 'actions', null) && (
                <div className="section__actions btn-group">
                  <SectionActions {...props} actions={_.get(tradition, 'actions', null)} />
                </div>
                )}
              </div>                  
            </div>
          </TraditionWrapper>
          ))}
        </div>
      </section>
  );
}

const TraditionWrapper = styled.div`
  padding-bottom: 3.75rem;
`;