import React from 'react';
import _ from 'lodash';

import { getData, classNames } from '../utils';
import Title from 'antd/lib/typography/Title';
import { Collapse, Row, Col } from 'antd';
import Document from './Document';
import styles from '../sass/components/document.module.scss';
import styled from 'styled-components'

const { Panel } = Collapse;

const panelDiv = {
  margin: 'auto',
  width: '50%',
}

export default class DocumentsSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeMenu: 'General'
      };
    }

    handleOnChange = (e) => {
      this.setState({ activeMenu: e.target.value })
    }

    render() {
        let section = _.get(this.props, 'section', null);

        return (
            <section className={classNames('section', 'hero')}>
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
                            <button key={idx} value={action.label} className={this.state.activeMenu === action.label ? styles.activeMenu : styles.nonActiveMenu} onClick={this.handleOnChange}>
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
                      let doc_year_data = getData(this.props.pageContext.site.data, doc_year);
                      return (
                        doc_year_data.year === this.state.activeMenu && <Accordion key={doc_year_idx}>
                         {doc_year_data.types.map((type, idx) => (
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
}

const Accordion = styled(Collapse)`
  font-size: 1em;

  .ant-collapse-header {
    font-weight: bold;
  }
`