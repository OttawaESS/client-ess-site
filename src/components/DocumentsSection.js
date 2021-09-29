import React, { useState } from 'react';
import _ from 'lodash';

import { getData, classNames } from '../utils';
import Title from 'antd/lib/typography/Title';
import { Collapse, Row, Col } from 'antd';
import Document from './Document';
import styles from '../sass/components/document.module.scss';
import styled from 'styled-components'
import { useIntl } from 'react-intl';

const { Panel } = Collapse;

const panelDiv = {
  margin: 'auto',
  width: '50%',
}

export default function DocumentsSection(props) {

    const [activeMenu, setActiveMenu] = useState('General');

    const handleOnChange = (e) => {
      setActiveMenu(e.target.value);
    }

    const locale = useIntl().locale;

    let section = _.get(props, 'section', null);

    return (
        <section className={classNames('section')}>
          <div className="container container--lg">
            <Row gutter={[16, 16]}>

              <Col xs={24} md={24} lg={12}>
                {_.get(section, 'title', null) && (
                  <Title className="section__title">{_.get(section, 'title', null)}</Title>
                )}
                {_.get(section, 'actions', null) && (
                <div className="section__actions">
                  <div>
                    {_.get(section, 'actions', null).map((action, idx) => (
                      <div className={styles.navButton}>
                        <button key={idx} value={action.label} className={activeMenu === action.label ? styles.activeMenu : styles.nonActiveMenu} onClick={handleOnChange}>
                          {action.label}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                )}
              </Col>

              <Col xs={24} md={24} lg={12} style={panelDiv}>
                {_.map(_.get(section, 'documents', null), (doc_year, doc_year_idx) => {
                  let doc_year_data = getData(props.pageContext.site.data, doc_year);
                  console.log(doc_year_data);
                  let doc_year_data_current_locale = locale === 'fr-Ca' ? doc_year_data.fr : doc_year_data.en;
                  return (
                    doc_year_data.year === activeMenu && <Accordion key={doc_year_idx}>
                     {doc_year_data_current_locale.types.map((type, idx) => (
                       <Panel header={type.type} key={idx}>
                         {type.files.map((file, id) => (
                           <li key={id}>
                             <Document document={file}/>
                            </li>
                         ))}
                       </Panel>
                     ))}
                    </Accordion>
                  )
                })}
              </Col>
              
            </Row>
          </div>
        </section>
    );
}

const Accordion = styled(Collapse)`
  font-size: 1.125em;

  .ant-collapse-header {
    font-weight: bold;
  }
`