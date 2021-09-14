import React from 'react';
import _ from 'lodash';
import { useIntl } from 'react-intl';

// import {getData, withPrefix, markdownify} from '../utils';
import { Link } from 'gatsby'
import { Row, Col, Card } from 'antd'
import { PrinterOutlined, FileOutlined, BulbOutlined } from '@ant-design/icons'
import Paragraph from 'antd/lib/typography/Paragraph';
import 'antd/dist/antd.css';
import styles from '../sass/components/map.module.scss'

const { Meta } = Card

const icons = {
    documents_icon : <FileOutlined className={styles.icon}/>,
    services_icon: <PrinterOutlined className={styles.icon}/>,
    resources_icon: <BulbOutlined className={styles.icon}/>,
}

const data = [
    {
        title: 'Important Documents',
        illustration: <FileOutlined className={styles.icon}/>,
        description: "Want to know more about the ESS’ constitution? Curious about our internal operations? Click here to access all the ESS’ most important documents!",
        link: '/resources/important-documents',
    },
    {
        title: 'Resources',
        illustration: <BulbOutlined className={styles.icon}/>,
        description: "As a member, you have access to all of ESS’ resources. From accessibility to scholarships, we want to do what we can to help you out. Click here for more information.",
        link: '/resources',
    },
    {
        title: 'Services',
        illustration: <PrinterOutlined className={styles.icon}/>,
        description: "Need to rent a locker? Want to buy some cool ESS merch? Click here to learn about the services available to you as an ESS member!",
        link: '/services',
    }
]

export default function PageMapSection(props) {
    
    let intl = useIntl();
    
    let section = _.get(props, 'section', null);

    const getCurrentLocale = () => { 
      let locale = intl.locale;
      return locale === 'fr-Ca' ? _.get(section, 'fr', null) : _.get(section, 'en', null)
    }

    let language = getCurrentLocale();
    let title = _.get(language, 'title', null);
    let cards = _.get(language, 'cards', null);
    
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
