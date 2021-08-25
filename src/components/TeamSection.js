import React from 'react';
import _ from 'lodash';
import 'antd/dist/antd.css';
import { Card} from 'antd';
import {getData, withPrefix, markdownify} from '../utils';
const { Meta } = Card;
export default class TeamSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--team">
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
              <div className="container container--lg align-center">
                <div className="flex flex--col-3">
                        {/*{_.map(
                            _.get(section, "team", null),
                            (person, person_idx) => {
                                let person_data = getData(
                                    this.props.pageContext.site.data,
                                    person
                                );*/}
                                {_.map(_.get(section, 'team', null), (person, person_idx)=> {
                                let person_data = getData(this.props.pageContext.site.data, person);
                                return (

                                  <Card
                                    style={{ width: 300,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      align: 'center'
                                    }}
                                    cover={
                                      <img
                                        alt="example"
                                        src={withPrefix(person_data.photo)}
                                        style={{
                                          width: 200,
                                          height: 200,
                                          borderRadius:200/2,
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          align: 'center'}}
                                      />
                                    }
                                  >
                                  <Meta
                                    title={person_data.first_name}
                                    description={markdownify(person_data.bio)}
                                  />
                                  </Card>
                                  /*<div>
                                        key={person_idx}
                                        className="cell"
                                        style={{
                                            paddingRight: "0.75rem",
                                            paddingLeft: "0.75rem",
                                        }}
                                      </div>*/
                                );
                              }
                            
                        )}
                </div>
              </div>
            </section>
        );
    }
}
