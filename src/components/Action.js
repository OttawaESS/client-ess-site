import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import translate from '../i18n/translate';

export default function Action(props) {
    
    let action = _.get(props, 'action', null);
    
    return (
        <Link to={withPrefix(_.get(action, 'url', null))}
          {...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
          {...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
          className={classNames({'btn': _.get(action, 'style', null) !== 'link', 'btn--secondary': _.get(action, 'style', null) === 'secondary'})}>{translate(_.get(action, 'label', null)) ? translate(_.get(action, 'label', null)) : _.get(action, 'label', null)}</Link>
    );
}
