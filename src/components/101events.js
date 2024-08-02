import React from 'react';
import _ from 'lodash';
import { Badge, Card } from 'antd';

export default function EventsSection101(props) {
    
    let section = _.get(props, 'section', null);

    const styles = {
      flexContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      },
      cardWrapper: {
        flex: '0 0 30%',  // 30% width for three cards in a row with some space between
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
