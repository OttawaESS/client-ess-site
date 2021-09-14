import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';

import { useIntl } from 'react-intl';

export default function HeroSection(props) {

  let intl = useIntl();

  let section = _.get(props, 'section', null);

  const getCurrentLocale = () => { 
    let locale = intl.locale;
    return locale === 'fr-Ca' ? _.get(section, 'fr', null) : _.get(section, 'en', null)
  }

  let language = getCurrentLocale();
  let background = _.get(language, 'background', null);
  let background_color = _.get(background, 'background_color', null) || 'white';
  let background_opacity_pct = _.get(background, 'background_image_opacity', null) || 100;
  let background_opacity = background_opacity_pct * 0.01;
  let background_size = _.get(background, 'background_image_size', null) || 'cover';
  let background_repeat = _.get(background, 'background_image_repeat', null) || 'no-repeat';
  let title = _.get(language, 'title', null);
  let subtitle = _.get(language, 'subtitle', null);

  return (
      <section className={classNames('hero', {'bg-image': _.get(language, 'has_background', null) && _.get(background, 'background_image', null), 'inverse bg-blue': _.get(language, 'has_background', null) && (background_color === 'blue'), 'bg-gray': _.get(language, 'has_background', null) && (background_color === 'gray'), 'section--padding': _.get(language, 'has_background', null) || _.get(language, 'image', null)})}>
        {(_.get(language, 'has_background', null) && _.get(background, 'background_image', null)) && (
        <div className="bg-image__image" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(background, 'background_image', null)) + '\'); opacity: ' + background_opacity + '; background-size: ' + background_size + '; background-repeat: ' + background_repeat)}/>
        )}
        <div className="container container--lg">
          <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(language, 'align', null) === 'center', 'align-right': _.get(language, 'align', null) === 'right'})}>
            {_.get(language, 'image', null) && (
            <div className={classNames('cell', 'section__media', {'section__media--right': _.get(language, 'image_position', null) === 'right'})}>
              <img src={withPrefix(_.get(language, 'image', null))} alt={_.get(language, 'image_alt', null)} />
            </div>
            )}
            <div className="cell section__body">
              {title && (
              <h1 className="section__title">
                {title}
              </h1>
              )}
              {subtitle && (
              <div className="section__copy">
                <p>{subtitle}</p>
              </div>
              )}
              {_.get(language, 'actions', null) && (
              <div className="section__actions btn-group">
                <SectionActions {...props} actions={_.get(language, 'actions', null)} />
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
}
