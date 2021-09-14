import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';

import { useIntl } from 'react-intl';

export default function HeroSection(props) {

  const intl = useIntl();
  const locale = intl.locale;
  
  let section = _.get(props, 'section', null);
  let background = _.get(section, 'background', null);
  let background_color = _.get(background, 'background_color', null) || 'white';
  let background_opacity_pct = _.get(background, 'background_image_opacity', null) || 100;
  let background_opacity = background_opacity_pct * 0.01;
  let background_size = _.get(background, 'background_image_size', null) || 'cover';
  let background_repeat = _.get(background, 'background_image_repeat', null) || 'no-repeat';
  let title = _.get(section, 'title', null);
  let substitle = _.get(section, 'subtitle', null);

  return (
      <section className={classNames('hero', {'bg-image': _.get(section, 'has_background', null) && _.get(background, 'background_image', null), 'inverse bg-blue': _.get(section, 'has_background', null) && (background_color === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (background_color === 'gray'), 'section--padding': _.get(section, 'has_background', null) || _.get(section, 'image', null)})}>
        {(_.get(section, 'has_background', null) && _.get(background, 'background_image', null)) && (
        <div className="bg-image__image" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(background, 'background_image', null)) + '\'); opacity: ' + background_opacity + '; background-size: ' + background_size + '; background-repeat: ' + background_repeat)}/>
        )}
        <div className="container container--lg">
          <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(section, 'align', null) === 'center', 'align-right': _.get(section, 'align', null) === 'right'})}>
            {_.get(section, 'image', null) && (
            <div className={classNames('cell', 'section__media', {'section__media--right': _.get(section, 'image_position', null) === 'right'})}>
              <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
            </div>
            )}
            <div className="cell section__body">
              {title && (
              <h1 className="section__title">
                {locale === 'fr-Ca' ? title[0].fr : title[0].en}
              </h1>
              )}
              {_.get(section, 'subtitle', null) && (
              <div className="section__copy">
                <p>{locale === 'fr-Ca' ? substitle[0].fr : substitle[0].en}</p>
              </div>
              )}
              {_.get(section, 'actions', null) && (
              <div className="section__actions btn-group">
                <SectionActions {...props} actions={_.get(section, 'actions', null)} />
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
}
