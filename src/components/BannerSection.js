import React from 'react';
import { useIntl } from 'react-intl';
import _ from 'lodash';
import { Link } from 'gatsby'
import { Carousel } from 'antd';
import styled from 'styled-components'
import {getData} from '../utils';
import styles from '../sass/components/banner.module.scss'

export default function BannerSection(props) {

   let section = _.get(props, 'section', null);
   const locale = useIntl().locale;

   return (
       <section className="section section--banner">
         <BannerCarousel autoplay speed={1000} autoplaySpeed={5000}>
          {_.map(_.get(section, 'slides', null), (slide, slide_idx) => {
              let slide_data = locale === 'fr-Ca' ? 
                getData(props.pageContext.site.data, slide).fr :
                getData(props.pageContext.site.data, slide).en;

              return (
               <div key={slide_idx}>
               <div className={styles.bannerComponent}>
                 <div className={styles.componentInfo}>
                   <span className={styles.title}>
                     {slide_data.title}
                   </span>
                   <span className={styles.date}>{slide_data.date}</span>
                   <span className={styles.description}>{slide_data.description}</span>
                   <Link to={slide_data.button_link}>
                   <button className="btn--secondary">
                       {slide_data.button_label}
                   </button>
                   </Link>
                 </div>
                 <div className={styles.componentImg}>
                     <img alt="Event" src={slide_data.image} />
                 </div>
               </div>
               </div>
              )
          })}
          </BannerCarousel>
       </section>
   );
}


const BannerCarousel = styled(Carousel)`
    background-color: #DDCDFF;
    vertical-align: middle;

    .slick-dots li {
        width: 116px;
        border-bottom: 1px solid #6B7280;
    }
    .slick-dots li button {
        background: #DDCDFF;
    }

    .slick-dots li.slick-active {
        width: 116px;
        border-bottom: none;
    }

    .slick-dots li.slick-active button {
        background: #FF6B00;
        height: 4px;
    }
`