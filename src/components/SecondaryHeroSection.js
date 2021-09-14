import React from 'react';
import _ from 'lodash';
import {withPrefix} from '../utils';
import styles from '../sass/components/secondaryHeroSection.module.scss';

export default function SecondaryHeroSection(props) {
    
    let section = _.get(props, 'section', null);
    
    return (
        <div className="section" style={{ paddingTop: 0 }}>
            <div className={styles.container}>
                {_.get(section, 'image', null) && (
                    <img src={withPrefix(_.get(section, 'image', null))} className={styles.background} alt="Ottawa city background" />
                )}
                {_.get(section, 'title', null) && (
                    <div className={styles.centeredText}>{_.get(section, 'title', null)}</div>
                )}
            </div>
        </div>
    );
}
