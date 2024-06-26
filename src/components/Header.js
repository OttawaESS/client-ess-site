/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import _ from "lodash";
import Logo from "../../static/images/logo.svg";
import { Dropdown, Menu, Select } from "antd";
import { Link, withPrefix, classNames } from "../utils";
import Action from "./Action";
import DownArrow from "../../static/images/down-arrow.svg";
import DownArrowHovered from "../../static/images/down-arrow-hovered.svg";
import translate from "../i18n/translate";
import { LOCALES } from "../i18n";

export default function Header(props) {
  const { setLocale } = props;
  const [linkState, setLinkState] = useState({
    itemHovered: false,
    itemLink: null,
  });
  const defaultLanguage =
    typeof window !== "undefined" && window.localStorage.getItem("locale");

  return (
    <header className="site-header">
      <div className="container container--lg">
        <nav className="navbar" aria-label="Main Navigation">
          <Link className="sr-only" to="#content">
            Skip to main content
          </Link>
          <div className="logo__container">
            <Link className="h4 navbar__title" to={withPrefix("/")}>
              <img src={Logo} alt="logo" className="navbar__logo" />
              <span>
                {translate(
                  _.get(
                    props,
                    "pageContext.site.siteMetadata.header.primary_title",
                    null
                  )
                )}
              </span>
              {translate(
                _.get(
                  props,
                  "pageContext.site.siteMetadata.header.secondary_title",
                  null
                )
              )}
            </Link>
          </div>

          {_.get(
            props,
            "pageContext.site.siteMetadata.header.has_nav",
            null
          ) && (
            <React.Fragment>
              <button
                aria-label="Menu"
                className="btn btn--icon btn--clear navbar__menu-btn js-nav-toggle"
              >
                <svg
                  className="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" />
                </svg>
              </button>
              <div className="navbar__menu">
                <div className="navbar__scroller">
                  <div className="navbar__inner">
                    <button
                      aria-label="Close"
                      className="btn btn--icon btn--clear navbar__close-btn js-nav-toggle"
                    >
                      <svg
                        className="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
                      </svg>
                    </button>
                    <ul className="navbar__list menu">
                      {_.map(
                        _.get(
                          props,
                          "pageContext.site.siteMetadata.header.nav_links",
                          null
                        ),
                        (action, action_idx) => {
                          let pageUrl = _.trim(
                            _.get(props, "pageContext.url", null),
                            "/"
                          );
                          let actionUrl = _.trim(
                            _.get(action, "url", null),
                            "/"
                          );
                          if (action.sub_links) {
                            const menu = (
                              <Menu>
                                {action.sub_links.map(({ label, url }, index) => (
                                  <Menu.Item className="dropdown__item" key={`menu-item-${url}-${index}`}>
                                    <Link to={url.startsWith("/") ? `${action.url}${url}` : url}>
                                      {translate(label)}
                                    </Link>
                                  </Menu.Item>
                                ))}
                              </Menu>
                            );
                            return (
                              <Dropdown
                                trigger={["click", "hover"]}
                                overlay={menu}
                                key={`dropdown-${action_idx}`}
                              >
                                <li
                                  onMouseEnter={() =>
                                    setLinkState({
                                      itemHovered: true,
                                      itemLink: action.url,
                                    })
                                  }
                                  onMouseLeave={() =>
                                    setLinkState({
                                      itemHovered: false,
                                      itemLink: null,
                                    })
                                  }
                                  key={action_idx}
                                  className={classNames("navbar__item", {
                                    "is-active": pageUrl === actionUrl,
                                  })}
                                >
                                  <Action {...props} action={action} />
                                  <img
                                    src={
                                      linkState.itemHovered &&
                                      action.url === linkState.itemLink
                                        ? DownArrowHovered
                                        : DownArrow
                                    }
                                    alt="down-arrow"
                                    className="down__arrow"
                                  />
                                </li>
                              </Dropdown>
                            );
                          }

                          return (
                            <li
                              key={action_idx}
                              className={classNames("navbar__item", {
                                "is-active": pageUrl === actionUrl,
                              })}
                            >
                              <Action {...props} action={action} />
                            </li>
                          );
                        }
                      )}

                      <Select
                        onChange={(value) => {
                          if (typeof window !== "undefined") {
                            window.localStorage.setItem("locale", value);
                          }
                          setLocale(value);
                        }}
                        defaultValue={defaultLanguage || LOCALES.ENGLISH}
                        className="navbar__item language__container"
                        suffixIcon={
                          <img
                            src={DownArrow}
                            alt="down-arrow"
                            className="down__arrow"
                          />
                        }
                      >
                        <Select.Option value={LOCALES.ENGLISH}>
                          English
                        </Select.Option>
                        <Select.Option value={LOCALES.FRENCH}>
                          Français
                        </Select.Option>
                      </Select>
                    </ul>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </nav>
      </div>
    </header>
  );
}
