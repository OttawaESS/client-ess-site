import React from 'react';
import _ from 'lodash';

export default class ContactSection extends React.Component {
    render() {
      let section = _.get(this.props, 'section', null);
      let starStyle = {color: "red"};
      let required_star = <span style={starStyle}>*</span>

        return (
            <section className="section">
              <div className="container container--lg align-center">
                <div className="cell section__body">
                    {_.get(section, 'title', null) && (
                    <h2 className="section__title">{_.get(section, 'title', null)}</h2>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <div className="section__copy">
                      <p>{_.get(section, 'subtitle', null)}</p>
                    </div>
                    )}
                </div>
              </div>
              <div className="container container--md">
                <p><em>All fields marked with {required_star} are required</em></p>
                <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="sr-only">
                    <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                    <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                  </div>
                  <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                  <div className="form-group">
                    <label id="name-label" htmlFor="name">Name {required_star}</label>
                    <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label id="email-label" htmlFor="email">Email {required_star}</label>
                    <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Your email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject {required_star}</label>
                    <input aria-labelledby="subject-label" type="text" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <label id="message-label" htmlFor="message">Message {required_star}</label>
                    <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder="Your message" />
                  </div>
                  <div className="form-group form-checkbox">
                    <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" required />
                    <label id="consent-label" htmlFor="consent">I understand that this form is storing my submitted information so I can be
                      contacted. {required_star}</label>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="button">Submit</button>
                  </div>
                </form>
              </div>
            </section>
        );
    }
}
