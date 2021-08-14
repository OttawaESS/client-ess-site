import React from 'react';
import _ from 'lodash';
import {withPrefix} from '../utils';
import styles from '../sass/components/secondaryHeroSection.module.scss';

export default class SecondaryHeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <div className={styles.container}>
                {_.get(section, 'image', null) && (
                    <img src={withPrefix(_.get(section, 'image', null))} className={styles.background} />
                )}
                {_.get(section, 'title', null) && (
                    <div className={styles.centeredText}>{_.get(section, 'title', null)}</div>
                )}
            </div>
        );
    }
}
