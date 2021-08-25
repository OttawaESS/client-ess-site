import React from 'react';
import _ from 'lodash';
import {markdownify} from '../utils';
import styles from '../sass/components/positionsSlider.module.scss';
import { Carousel } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

export default class PositionsSlider extends React.Component {
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
                    <div>
                        {_.get(section, 'title', null) && (
                            <h3 className={styles.carousel_title}>{_.get(section, 'title', null)}</h3>
                        )}
                    </div>
                    <div className={styles.carousel_container}>
                    <LeftOutlined onClick={this.previous} className={styles.left_arrow} />
                    <Carousel autoplay className={styles.carousel} dots={false} ref={slide => (this.carousel = slide)} speed={1000} autoplaySpeed={5000}>
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
                    <RightOutlined className={styles.right_arrow} onClick={this.next}/>
                    </div>
                </div>
            </div>
        );
    }
}