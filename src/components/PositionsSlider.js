import React, { useRef } from 'react';
import _ from 'lodash';
import {markdownify} from '../utils';
import styles from '../sass/components/positionsSlider.module.scss';
import { Carousel } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

export default function PositionsSlider(props) {
    
    const ref = useRef();

    function next() {
        ref.current.next();
    }
    
    function previous() {
        ref.current.prev();
    }

    let section = _.get(props, 'section', null);
    
    return (
        <div className="section">
            <div className="container container--lg">
            <div className={styles.container}>
                <div>
                    {_.get(section, 'title', null) && (
                        <h3 className="section__title align-center">{_.get(section, 'title', null)}</h3>
                    )}
                </div>
                <div className={styles.carousel_container}>
                <LeftOutlined onClick={previous} className={styles.left_arrow} />
                <Carousel autoplay className={styles.carousel} dots={false} ref={ref} speed={1000} autoplaySpeed={5000}>
                {_.map(_.get(section, 'positions', null), (position, position_idx) => {
                    return (
                    <div key={position_idx}>
                        <div className={styles.position_section}>
                            {_.get(position, 'title', null) && (
                                <div className={styles.position_title}>{_.get(position, 'title', null)}</div>
                            )}
                            {_.get(position, 'content', null) && (
                                <div className={styles.position_info}>
                                {markdownify(_.get(position, 'content', null))}
                                </div>
                            )}
                        </div>
                    </div>
                )
                })}
                </Carousel>
                <RightOutlined className={styles.right_arrow} onClick={next}/>
                </div>
            </div>
            </div>
        </div>
    );
}