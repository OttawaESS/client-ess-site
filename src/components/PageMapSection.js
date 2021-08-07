import React from 'react';
import _ from 'lodash';

// import {getData, withPrefix, markdownify} from '../utils';
import { Link } from 'gatsby'
import { Row, Col, Card } from 'antd'
import { PrinterOutlined, FileOutlined, BulbOutlined } from '@ant-design/icons'
import Paragraph from 'antd/lib/typography/Paragraph';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styles from '../sass/components/map.module.scss'

const { Meta } = Card

const data = [
    {
        title: 'Important Documents',
        illustration: <FileOutlined className={styles.icon}/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nam at amet congue vel nunc. Arcu lobortis in facilisis ut ipsum volutpat gravida.",
        link: '/resources/important-documents',
    },
    {
        title: 'Resources',
        illustration: <BulbOutlined className={styles.icon}/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nam at amet congue vel nunc. Arcu lobortis in facilisis ut ipsum volutpat gravida.",
        link: '/resources',
    },
    {
        title: 'Services',
        illustration: <PrinterOutlined className={styles.icon}/>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nam at amet congue vel nunc. Arcu lobortis in facilisis ut ipsum volutpat gravida.",
        link: '/services',
    }
]

export default class PageMapSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--team">
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
              <div className="container container--lg">
                <Row gutter={[32, 32]}>
                    {data.map((pageInfo, index) => {
                        return (
                        <Col xs={24} md={12} lg={8} key={index}>
                            <Link to={pageInfo.link} className={styles.link}>
                                <Card className={styles.card} hoverable
                                >
                                    {pageInfo.illustration}
                                    <Meta
                                    title={pageInfo.title}
                                    description={<Paragraph className={styles.cardBody} type="secondary">{pageInfo.description}</Paragraph>}
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
}
