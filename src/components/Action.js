import React from 'react';
import _ from 'lodash';
import { useIntl } from 'react-intl';

import {Link, withPrefix, classNames} from '../utils';
import translate from '../i18n/translate';

export default function Action(props) {
    
    let action = _.get(props, 'action', null);
    let label = _.get(action, 'label', null);
    let translatedLabel = !!useIntl().messages[label] ? translate(label) : label;

    return (
        <Link to={withPrefix(_.get(action, 'url', null))}
          {...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
          {...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
          className={classNames({'btn': _.get(action, 'style', null) !== 'link', 'btn--secondary': _.get(action, 'style', null) === 'secondary'})}>{translatedLabel}</Link>
    );
}
