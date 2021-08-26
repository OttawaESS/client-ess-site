import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import { Row, Col } from 'antd';
import styled from 'styled-components';

export default class CommitteeSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section">
              <div className="container container--md">
                {_.get(section, 'title', null) && (
                <h2 className="section__title align-center">{_.get(section, 'title', null)}</h2>
                )}
              </div>

              <div className="container container--lg">
                {_.map(_.get(section, 'committees', null), (committee, committee_idx) => {
                    return (
                      <StyledRow key={committee_idx} gutter={[40, 40]}>
                        <StyledCol sm={24} md={24} lg={4}><Title>{committee.title}</Title></StyledCol>
                        <Col sm={24} md={24} lg={20}>
                          <StyledH4>{committee.title}</StyledH4>
                          <p>{markdownify(committee.description)}</p>
                        </Col>
                      </StyledRow>
                    )
                })}
              </div>
            </section>
        );
    }
}


const Title = styled.h3`
  font-family: 'Playfair Display';
  font-weight: normal;
`

const StyledH4 = styled.h4`
  text-decoration: underline;
`

const StyledCol = styled(Col)`
  margin: auto;
`

const StyledRow = styled(Row)`
  margin-bottom: 1rem;
`
