import React from 'react';
import _ from 'lodash';
import styles from '../sass/components/locationSection.module.scss';
import translate from '../i18n/translate';

export default function LocationSection(props) {
    
    let section = _.get(props, 'section', null);
    return (
        <div className="section hero">
            <div className="container container--lg">
                <div className="flex flex--col-2">
                    <div className={styles.info_section}>
                        <h2 className="section--title">{translate("Location")}</h2>
                        {_.get(section, 'location', null) && (
                        <div className={styles.location}>
                            <span className={styles.info_title}>{translate("Location")}: </span>
                            <span>{_.get(section, 'location', null)}</span>
                        </div>
                        )}
                        {_.get(section, 'telephone', null) && (
                        <div className={styles.telephone}>
                            <span className={styles.info_title}>Telephone: </span>
                            <span>{_.get(section, 'telephone', null)}</span>
                        </div>
                        )}
                        {_.get(section, 'email', null) && (
                        <div className={styles.email}>
                            <span className={styles.info_title}>Email: </span>
                            <span>{_.get(section, 'email', null)}</span>
                        </div>
                        )}
                    </div>
                    <div className={styles.map_section}>
                        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2098563203785!2d-75.68225151924665!3d45.42105305857751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a75ded2db5%3A0x4d1a138c49c5ccb2!2sEngineering%20Students&#39;%20Society%2C%20University%20Of%20uOttawa!5e1!3m2!1sen!2sca!4v1629650000867!5m2!1sen!2sca" allowFullScreen="" loading="lazy" title="location"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}