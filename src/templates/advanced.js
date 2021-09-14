import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';
import { useIntl } from 'react-intl';

import components, {Layout} from '../components/index';
import { I18nProvider, LOCALES } from '../i18n';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default function Advanced(props) {
    // render() {
    const locale = LOCALES.FRENCH;
    console.log(_.get(props, 'pageContext.frontmatter.fr.sections', null));
    return (
        <I18nProvider locale={locale}>
          <Layout {...props}>
          {_.map(_.get(props, 'pageContext.frontmatter.fr.sections', null), (section, section_idx) => {
              let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
              let Component = components[component];
              return (
                <Component key={section_idx} {...props} section={section} site={props.pageContext.site} />
              )
          })}
          </Layout>
        </I18nProvider>
    );
    // }
}
