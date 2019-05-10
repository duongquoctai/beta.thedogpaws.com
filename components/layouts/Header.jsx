import React from "react"
import { Link } from "../../routes"
import { LazyLoadImage } from "react-lazy-load-image-component"
import config from "../../services/publicConfig"

export default function Header() {
  return (
    <div>
      <section className="page_topline with_search ls ms section_padding_15 table_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 text-center text-sm-left">
              <p className="divided-content greylinks">
                {
                  config.subMenuLinks.map(link => (
                    <Link key={ link.route } route={ link.route }>
                      <a>{ link.title }</a>
                    </Link>
                  ))
                }
              </p>
            </div>
            <div className="col-sm-4 text-center text-sm-right">
              <div className="widget widget_search">
                <form method="get" className="form-inline" action="/search">
                  <div className="form-group-wrap">
                    <div className="form-group margin_0">
                      <label className="sr-only" htmlFor="topline-search">Search for:</label>
                      <input id="topline-search" type="text" name="q" className="form-control" placeholder="Search" />
                    </div>
                    <button type="submit" className="theme_button">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page_toplogo table_section table_section_md ls section_padding_top_15 section_padding_bottom_15">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center text-md-left">
              <a href="/" className="logo top_logo">
                <LazyLoadImage alt="" src={ `${config.assetPrefix}/static/images/thedogpaws.net/logo.png` } />
              </a>
            </div>
            <div className="col-md-9 text-center text-md-right">
              <div className="inline-teasers-wrap">
                <div className="small-teaser text-left">
                  <p className="small-text grey margin_0">
                    Our Mailbox:
                  </p>
                  <p className="highlight2 fontsize_20 medium">
                    support@thedogpaws.com
                  </p>
                </div>
                <div className="small-teaser text-left">
                  <p className="small-text grey margin_0">
                    Our Location:
                  </p>
                  <p className="highlight2 fontsize_20 medium">
                    3501 Jack Northrop Ave, Hawthorne
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header className="page_header header_white toggler_left with_top_border item_with_border">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 display_table">
              <div className="header_mainmenu display_table_cell">
                <nav className="mainmenu_wrapper">
                  <ul className="mainmenu nav sf-menu">
                    {
                      config.mainMenuLinks.map(link => (
                        <li key={ link.route }>
                          <Link route={ link.route }>
                            <a className="text-uppercase">{ link.title }</a>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </nav>
                <span className="toggle_menu">
                <span></span>
                </span>
              </div>
              <div className="header_right_buttons display_table_cell text-right">
                <div className="page_social_icons greylinks">
                  <a className="social-icon rounded-icon border-icon soc-facebook"  target="_blank" href="//www.facebook.com/thedogpawsdotcom/" title="Facebook"></a>
                  <a className="social-icon rounded-icon border-icon soc-instagram" target="_blank" href="//www.instagram.com/thedogpawsdotcom/" title="Instagram"></a>
                  <a className="social-icon rounded-icon border-icon soc-pinterest" target="_blank" href="//www.pinterest.com/thedogpawsdotcom/" title="Pinterest"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}