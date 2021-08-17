import React from 'react';

import { Divider } from 'antd'

export default class LineDivider extends React.Component {
    render() {
        return (
            <div className="container container--lg">
              <Divider style={{ border: '1px solid rgba(0, 0, 0, 0.06)' }}/>
            </div>
        );
    }
}
