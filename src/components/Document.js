import React from 'react';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons'
import { withPrefix } from '../utils';
import styles from '../sass/components/document.module.scss';
import styled from 'styled-components'
import { Card } from 'antd';

const docDivStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

}

export default class Document extends React.Component {
    render() {
        return (
            <div>
               <Container className="docContainer">
                   <div className={styles.meta}>
                       <p>{this.props.document.date}</p>
                   </div>
                   <div className={styles.bold}>
                       <p>{this.props.document.label}</p>
                   </div>
                   <div>
                       <a className={styles.icon} href={withPrefix(this.props.document.path)} target = "_blank" rel="noreferrer" aria-label="view-document"><EyeOutlined /></a>
                       <a className={styles.icon} href={withPrefix(this.props.document.path)} target = "_blank" rel="noreferrer" aria-label="download-document" download><DownloadOutlined /></a>
                   </div>
               </Container>
               
               <MobileContainer>
                   <Card>
                       <div className={styles.meta}>
                           <span>{this.props.document.date}</span>
                       </div>
                       <div className={styles.meta}>
                           <a aria-label="view-document" href={withPrefix(this.props.document.path)}>{this.props.document.label}</a>
                       </div>
                    </Card>
                </MobileContainer>
            </div>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        display: none;
    }
`
const MobileContainer = styled.div`
    display: none;

    @media screen and (max-width: 480px) {
        display: block;
    }
`