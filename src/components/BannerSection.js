import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby'

import Carousel from 'react-bootstrap/esm/Carousel'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getData} from '../utils';
import styles from '../sass/components/banner.module.scss'

export default class BannerSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--banner">
              <div>
              <BannerCaroussel>
               {_.map(_.get(section, 'slides', null), (slide, slide_idx) => {
                   let slide_data = getData(this.props.pageContext.site.data, slide);
                   return (
                  <Carousel.Item key={slide_idx}>
                    <div className={styles.bannerComponent}>
                      <div className={styles.componentInfo}>
                        <span className={styles.title}>
                          {slide_data.title}
                        </span>
                        <span className={styles.date}>{slide_data.date}</span>
                        <span className={styles.description}>{slide_data.description}</span>
                        <Link to={slide_data.button_link}>
                        <button>
                            {slide_data.button_label}
                        </button>
                        </Link>
                      </div>
                      <div className={styles.componentImg}>
                          <img alt="Event" src={slide_data.image} />
                      </div>
                    </div>
                  </Carousel.Item>
                   )
               })}
               </BannerCaroussel>
              </div>
            </section>

        );
    }
}


const BannerCaroussel = styled(Carousel)`
    height: 464px;
    weight: 100%;
    background-color: #DDCDFF;
    vertical-align: middle;
    .carousel-indicators li {
        border-bottom: 1px solid #6B7280;
        height: 0;
        width: 116px;
    }
    li.active {
        background-color: #FF6B00;
        height: 4px;
        border-bottom: none;
        margin-bottom: 50px;
    }
    @media screen and (max-width: 900px) {
        .carousel-control-next {
            margin-right: -40px;
        }
        .carousel-control-prev {
            margin-left: -40px;
        }
    }
    @media screen and (max-width: 768px) {
        height: 640px;
        .carousel-indicators {
            margin-bottom: 0px;
        }
        .carousel-control-next {
            margin-right: 0px;
        }
        .carousel-control-prev {
            margin-left: 0px;
        }
    }
`