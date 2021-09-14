import React from 'react';
import _ from 'lodash';

import Action from './Action';

export default function SectionActions(props) {
    
    let actions = _.get(props, 'actions', null);
    return (
        _.map(actions, (action, action_idx) => (
          <Action key={action_idx} {...props} action={action} />
        ))
    );
}
