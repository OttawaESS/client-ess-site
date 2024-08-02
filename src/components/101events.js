import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Badge, Card } from 'antd';

export default function EventsSection101(props) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);

      // Initial check
      handleResize();

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  let section = _.get(props, 'section', null);

  const styles = {
      flexContainer: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
      },
      cardWrapper: {
          flex: isSmallScreen ? '0 0 100%' : '0 0 30%',  // 100% width for one card in a row on small screens, 30% on larger screens
          marginBottom: '20px'  // Adjust spacing between rows
      },
      container: {
          textAlign: 'center'
      }
  };

  return (
      <section className="section">
          {_.get(section, 'title', null) && (
              <div className="container container--md" style={styles.container}>
                  <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
          )}
          <div className="container container--lg">
              <div className="flex-container" style={styles.flexContainer}>
                  {_.map(_.get(section, 'events', null), (event, event_idx) => {
                      return (
                          <div key={event_idx} className="card-wrapper" style={styles.cardWrapper}>
                              <Card title={event.title} size="small">
                                  <div style={{ textAlign: 'center' }}>
                                      <img src={event.image} width="100%" alt={event.title}></img>
                                  </div>
                                  <br></br>
                                  {event.description}
                              </Card>
                          </div>
                      );
                  })}
              </div>
          </div>
      </section>
  );
}
