import React from 'react';
import _ from 'lodash';
import translate from '../i18n/translate';
import { useIntl } from 'react-intl';

export default function ContactSection(props) {

  let section = _.get(props, 'section', null);
  let starStyle = {color: "red"};
  let required_star = <span style={starStyle}>*</span>

  let locale = useIntl().locale;

  const placeholders = {
    'name' : locale === 'fr-Ca' ? "Votre nom" : "Your name",
    'email' : locale === 'fr-Ca' ? "Votre email" : "Your email",
    'subject' : locale === 'fr-Ca' ? "Subject" : "Sujet",
    'message' : locale === 'fr-Ca' ? "Votre message" : "Your message",
  }

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
            <p><em>{translate("All fields marked with")} {required_star} {translate("are required")}</em></p>
            <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou">
              <div className="sr-only">
                <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
              </div>
              <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
              <div className="form-group">
                <label id="name-label" htmlFor="name">{translate("Name")} {required_star}</label>
                <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder={placeholders["name"]} required />
              </div>
              <div className="form-group">
                <label id="email-label" htmlFor="email">Email {required_star}</label>
                <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder={placeholders["email"]} pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{translate("Subject")} {required_star}</label>
                <input aria-labelledby="subject-label" type="text" name="subject" id="subject" placeholder={placeholders["subject"]} required />
              </div>
              <div className="form-group">
                <label id="message-label" htmlFor="message">Message {required_star}</label>
                <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder={placeholders["message"]} />
              </div>
              <div className="form-group form-checkbox">
                <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" required />
                <label id="consent-label" htmlFor="consent">{translate("consent_message")} {required_star}</label>
              </div>
              <div className="form-submit">
                <button type="submit" className="button">{translate("Submit")}</button>
              </div>
            </form>
          </div>
        </section>
    );
}
