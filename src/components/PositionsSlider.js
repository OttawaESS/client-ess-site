import React from 'react';
import _ from 'lodash';
import {markdownify} from '../utils';
import styles from '../sass/components/positionsSlider.module.scss';
import { Carousel } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

export default class SecondaryHeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }

    render() {
        let section = _.get(this.props, 'section', null);

        return (
            <div className="section" style={{ paddingTop: 0 }}>
                <div className={styles.container}>
                <LeftOutlined onClick={this.previous} className={styles.left_arrow} />
                <Carousel autoplay className={styles.carousel} dots={false} ref={slide => (this.carousel = slide)} speed={1000} autoplaySpeed={5000}>
                {_.map(_.get(section, 'positions', null), (position, position_idx) => {
                    return (
                    <div key={position_idx}>
                        {_.get(section, 'title', null) && (
                            <div className={styles.carousel_title}>{_.get(section, 'title', null)}</div>
                        )}
                        <div className={styles.position_section}>
                            <div className={styles.position_left}>
                                {_.get(position, 'title_1', null) && (
                                    <div className={styles.position_left_title}>{_.get(position, 'title_1', null)}</div>
                                )}
                                {_.get(position, 'content_1', null) && (
                                    <div className={styles.position_left_info}>
                                    {markdownify(_.get(position, 'content_1', null))}
                                    </div>
                                )}
                            </div>
                            <div className={styles.position_right}>
                                {_.get(position, 'title_2', null) && (
                                    <div className={styles.position_right_title}>{_.get(position, 'title_2', null)}</div>
                                )}
                                {_.get(position, 'content_2', null) && (
                                    <div className={styles.position_right_info}>
                                    {markdownify(_.get(position, 'content_2', null))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                   )
                })}
                </Carousel>
                <RightOutlined className={styles.right_arrow} onClick={this.next}/>
                </div>
            </div>
        );
    }
}