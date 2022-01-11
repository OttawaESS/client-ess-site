import React from 'react';
import _ from 'lodash';

import { Link } from 'gatsby'
import { Row, Col, Card } from 'antd'
import { PrinterOutlined, FileOutlined, BulbOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
import styles from '../sass/components/map.module.scss'

const { Meta } = Card

const icons = {
    documents_icon : <FileOutlined className={styles.icon}/>,
    services_icon: <PrinterOutlined className={styles.icon}/>,
    resources_icon: <BulbOutlined className={styles.icon}/>,
}

export default function PageMapSection(props) {
    
    let section = _.get(props, 'section', null);
    let title = _.get(section, 'title', null);
    let cards = _.get(section, 'cards', null);
    
    return (
        <section className="section section--team">
          {title && (
          <div className="container container--md align-center">
            <h2 className="section__title">{title}</h2>
          </div>
          )}
          <div className="container container--lg">
            <Row gutter={[32, 32]}>
                {cards.map((pageInfo, index) => {
                    return (
                    <Col xs={24} md={12} lg={8} key={index}>
                        <Link to={pageInfo.link} className={styles.link}>
                            <Card className={styles.card} style={{ height: '100%' }} hoverable
                            >
                                {icons[pageInfo.illustration]}
                                <Meta
                                title={pageInfo.title}
                                description={<p className={styles.cardBody} type="secondary">{pageInfo.description}</p>}
                                />
                            </Card>
                        </Link>
                    </Col>
                    )
                })}
            </Row>
          </div>
        </section>
    );
}
