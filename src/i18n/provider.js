import React from "react";
import { IntlProvider } from 'react-intl'
import { Fragment } from 'react'
import { LOCALES } from './locales'
import content from './content'

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={content[locale]}
    >
      {children}
    </IntlProvider>
)

export default Provider