import React from 'react';
import _ from 'lodash';
import { Badge, Card } from 'antd';

export default function EventsSection101(props) {
    
    let section = _.get(props, 'section', null);

    return (
      <section className="section">
        {_.get(section, 'title', null) && (
        <div className="container container--md align-center" style={{ textAlign: 'center' }}>
          <h2 className="section__title" >{_.get(section, 'title', null)}</h2>
        </div>
        )}
        <div className="container container--lg">
          <div className="flex flex--col-2">
            {_.map(_.get(section, 'events', null), (event, event_idx) => {
                return (
                  <div key={event_idx} className="cell small">
                    <div style={{ margin: '0.875rem' }}>
                      <Card title={event.title} size="small">
                        <div style={{ textAlign: 'center' }}>
                          <img src={event.image} width="100%"></img>
                        </div>
                        <br></br>
                        {event.description}
                      </Card>
                    </div>
                  </div>
                )
            })}
          </div>
        </div>
      </section>
    );
}
