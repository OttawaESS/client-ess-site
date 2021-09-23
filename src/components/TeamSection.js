import React from 'react';
import _ from 'lodash';
import 'antd/dist/antd.css';
import { Card, Col, Row} from 'antd';
import {getData, withPrefix} from '../utils';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
const { Meta } = Card;

export default function TeamSection(props) {

    let section = _.get(props, 'section', null);
    let currentLocale = useIntl().locale;

    return (
        <section className="section section--team">
          {_.get(section, 'title', null) && (
            <div className="container container--md align-center">
              <h2 className="section__title">{_.get(section, 'title', null)}</h2>
            </div>
          )}

          <div className="container container--lg align-center">
            <Row gutter={[32, 32]}>
              {_.map(_.get(section, 'team', null), (person, person_idx)=> {
                let person_data = getData(props.pageContext.site.data, person);
                
                return (
                  <Col xs={24} sm={24} md={12} lg={8} key={person_idx}>
                    <StyledCard
                      style={{ 
                        height: 'auto',
                        justifyContent: 'center',
                        alignItems: 'center',
                        align: 'center',
                        padding: 24
                      }}
                      cover={
                        <img
                          alt="example"
                          src={withPrefix(person_data.photo)}
                          style={{
                            width: 200,
                            height: 200,
                            maxWidth: '100%',
                            WebkitBorderRadius: '50%',
                            margin: 'auto',
                          }}
                        />
                      }
                    >
                      <Meta
                        title={person_data.first_name + " " + person_data.last_name}
                        description={
                          <p>
                            <span>
                              {currentLocale === 'fr-Ca' ? person_data.position.fr : person_data.position.en}
                            </span>
                            <br/>
                            <span>
                              <a href={`mailto:${person_data.email}`} target="_blank" rel="noopener noreferrer">
                                {person_data.email}
                              </a>
                            </span>
                          </p>          
                        }
                      />
                    </StyledCard>
                  </Col>
                  );
              })}
            </Row>
          </div>
        </section>
    );
}

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 24px 0 0 0;
  }
`