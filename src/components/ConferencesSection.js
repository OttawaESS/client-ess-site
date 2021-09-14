import React from 'react';
import _ from 'lodash';
import { Comment, Avatar } from 'antd';
import { markdownify, withPrefix } from '../utils';
import styled from 'styled-components';

export default function ConferencesSection(props) {
    
    let section = _.get(props, 'section', null);

    return (
        <section className="section">              
          <div className="container container--lg">
            {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
            )}
            {_.map(_.get(section, 'conferences', null), (conference, conference_idx) => {
                return (
                  <div key={conference_idx} className="section">
                    <div className="container container--md">
                    {_.get(conference, 'title', null) && (
                      <h3 className="section__title align-center">{_.get(conference, 'title', null)}</h3>
                    )}
                    {_.get(conference, 'description', null) && (
                      <div className="section__copy">
                        {markdownify(_.get(conference, 'description', null))}
                      </div>
                    )}
                    </div>

                    <div className="bg-gray x-sm-padding">
                      {_.map(_.get(conference, 'testimonials', null), (testimonial, testimonial_idx) => {
                        return (
                          <div key={testimonial_idx}>
                            <StyledComment
                            author={testimonial.author}
                            avatar={
                              <Avatar
                                size="large"
                                src={withPrefix(testimonial.author_picture)}
                                alt={testimonial.author}
                              />
                            }
                            content={
                              markdownify(testimonial.message)
                            }
                          /> 
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
            })}
          </div>
        </section>
    );
}

const StyledComment = styled(Comment)`
    .ant-avatar-lg {
        width: 50px;
        height: 50px;
    }

    .ant-comment-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .ant-comment-content-author > a, .ant-comment-content-author > span {
        padding-right: 8px;
        font-size: 1rem;
        line-height: 18px;
        margin-bottom: 0.5rem;
    }
`
