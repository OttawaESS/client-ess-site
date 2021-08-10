import React from 'react';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons'
import {getData, classNames, toStyleObj, withPrefix} from '../utils';
import styles from '../sass/components/document.module.scss';

const docDivStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export default class Document extends React.Component {
    render() {
        return (
            <div style={docDivStyle}>
                <div className={styles.meta}>
                    <p>{this.props.document.date}</p>
                </div>
                <div className={styles.bold}>
                    <p>{this.props.document.label}</p>
                </div>
                <div>
                    <a className={styles.icon} href={withPrefix(this.props.document.path)} target = "_blank" rel="noreferrer"><EyeOutlined /></a>
                    <a className={styles.icon} href={withPrefix(this.props.document.path)} target = "_blank" rel="noreferrer" download><DownloadOutlined /></a>
                </div>
            </div>
        );
    }
}
