import React, { useState } from "react";
import _ from "lodash";
import Logo from "../../static/images/logo.svg";
import { Dropdown, Menu } from "antd";
import { Link, withPrefix, classNames } from "../utils";
import Action from "./Action";
import DownArrow from "../../static/images/down-arrow.svg";
import DownArrowHovered from "../../static/images/down-arrow-hovered.svg";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemHovered: false, itemLink: null };
  }
  render() {
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
                  {_.get(
                    this.props,
                    "pageContext.site.siteMetadata.header.primary_title",
                    null
                  )}
                </span>
                {_.get(
                  this.props,
                  "pageContext.site.siteMetadata.header.secondary_title",
                  null
                )}
              </Link>
            </div>

            {_.get(
              this.props,
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
                            this.props,
                            "pageContext.site.siteMetadata.header.nav_links",
                            null
                          ),
                          (action, action_idx) => {
                            let pageUrl = _.trim(
                              _.get(this.props, "pageContext.url", null),
                              "/"
                            );
                            let actionUrl = _.trim(
                              _.get(action, "url", null),
                              "/"
                            );
                            if (action.sub_links) {
                              const menu = (
                                <Menu>
                                  {action.sub_links.map(({ label, url }) => (
                                    <Link
                                      className="dropdown__item"
                                      key={`menu-item-${url}`}
                                      to={`${action.url}${url}`}
                                    >
                                      <Menu.Item>{label}</Menu.Item>
                                    </Link>
                                  ))}
                                </Menu>
                              );
                              return (
                                <Dropdown
                                  overlay={menu}
                                  key={`dropdown-${action_idx}`}
                                >
                                  <li
                                    onMouseEnter={() =>
                                      this.setState({
                                        itemHovered: true,
                                        itemLink: action.url,
                                      })
                                    }
                                    onMouseLeave={() =>
                                      this.setState({
                                        itemHovered: false,
                                        itemLink: null,
                                      })
                                    }
                                    key={action_idx}
                                    className={classNames("navbar__item", {
                                      "is-active": pageUrl === actionUrl,
                                    })}
                                  >
                                    <Action {...this.props} action={action} />
                                    <img
                                      src={
                                        this.state.itemHovered &&
                                        action.url === this.state.itemLink
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
                                <Action {...this.props} action={action} />
                              </li>
                            );
                          }
                        )}
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
}
