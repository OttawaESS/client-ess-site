import React from 'react';
import _ from 'lodash';
import { Badge, Card } from 'antd';

export default function RecurringEventsSection(props) {
    
    let section = _.get(props, 'section', null);

    return (
      <section className="section">
        {_.get(section, 'title', null) && (
        <div className="container container--md align-center">
          <h2 className="section__title">{_.get(section, 'title', null)}</h2>
        </div>
        )}
        <div className="container container--lg">
          <div className="flex flex--col-2">
            {_.map(_.get(section, 'events', null), (event, event_idx) => {
                return (
                  <div key={event_idx} className="cell small">
                    <div style={{ margin: '0.875rem' }}>
                      <Badge.Ribbon text={event.frequency} color="purple">
                        <Card title={event.title} size="small">
                          {event.description}
                        </Card>
                      </Badge.Ribbon>
                    </div>
                  </div>
                )
            })}
          </div>
        </div>
      </section>
    );
}
