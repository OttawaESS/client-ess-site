import React from 'react';
import _ from 'lodash';

import {markdownify, withPrefix} from '../utils';
import { Row, Col, Divider } from 'antd';
import styled from 'styled-components';

export default class FlatCardsSection extends React.Component {
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
                {_.map(_.get(section, 'cards', null), (card, card_idx) => {
                    return (
                      <StyledDiv>
                        <Row key={card_idx} gutter={[40, 40]}>
                          <StyledCol sm={24} md={24} lg={4}>
                            <img src={withPrefix(card.image)} alt={card.title} width={186} height={166} />
                          </StyledCol>
                          <Col sm={24} md={24} lg={20}>
                            { card.link ? 
                              <a href={card.link} target="_blank" rel="noopener noreferrer"><StyledH4>{card.title}</StyledH4></a> :
                              <h4>{card.title}</h4>
                            }
                            <p>{markdownify(card.description)}</p>
                          </Col>
                        </Row>
                        {card_idx < _.get(section, 'cards', null).length - 1 && <Separator/>}
                      </StyledDiv>
                    )
                })}
              </div>
            </section>
        );
    }
}



const StyledH4 = styled.h4`
  color: #5201FF;
`

const StyledDiv = styled.div`
  margin-bottom: 1rem;
`

const StyledCol = styled(Col)`
  margin: auto;
  text-align: center;
`

const Separator = styled(Divider)`
  margin-bottom: 3.75rem;
`