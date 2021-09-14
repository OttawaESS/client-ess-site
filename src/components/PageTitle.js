import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
import styled from 'styled-components';

export default function PageTitle(props) {
    
    let section = _.get(props, 'section', null);
    return (
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }} className={classNames("container", {'container--md': _.get(section, 'container', null) === 'medium'}, {'container--lg': _.get(section, 'container', null) !== 'medium'})}>
            {_.get(section, 'title', null) && (
            <Title className="section__title">{_.get(section, 'title', null)}</Title>
            )}
        </div>
    );
}

const Title = styled.h1`
    display: inline-block;
    font-family: 'Playfair Display';
    padding: 0.75rem 2rem;
    border: 1px solid black;
    border-radius: 6px;
`

