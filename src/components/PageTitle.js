import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
// import "../sass/components/pageTitle.module.scss";
import styled from 'styled-components';

export default class PageTitle extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            // <section className="section">
              <div style={{ marginTop: '2rem' }} className={classNames("container", {'container--md': _.get(section, 'container', null) === 'medium'}, {'container--lg': _.get(section, 'container', null) !== 'medium'})}>
                {_.get(section, 'title', null) && (
                <Title className="section__title">{_.get(section, 'title', null)}</Title>
                )}
              </div>
            // </section>
        );
    }
}

const Title = styled.h1`
    display: inline-block;
    font-family: 'Playfair Display';
    padding: 0.75rem 2rem;
    border: 1px solid black;
    border-radius: 6px;
`

