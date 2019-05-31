import React from "react"
import Head from "next/head"
import { Link } from "../routes"
import wpapi from "../services/wpapi"
import config from "../services/publicConfig"
import Layout from "../components/layouts/Layout"
import Pagination from "../components/ui/Pagination"
import { LazyLoadImage } from "react-lazy-load-image-component"

class Index extends React.Component {
  static async getInitialProps ({ ctx }) {
    const currentPage = ctx.query.page ? ctx.query.page : 1

    const posts = await wpapi
      .posts()
      .page(currentPage)
      .perPage(config.postsPerPage.homePage)

    return { asPath: ctx.asPath, posts }
  }

  render () {
    const { asPath, posts } = this.props

    return(
      <Layout
        asPath={ asPath }
        body={ Body({ posts }) }
        title={ config.site.homePageTitle } />
    )
  }
}

function Body(props) {
  const { posts } = props

  return(
    <div>
      <section className="intro_section page_mainslider ls ms">
        <div className="flexslider">
          <ul className="slides">
            <li>
              <LazyLoadImage alt="" src={ `${config.assetPrefix}/static/images/slide01.jpg` } />
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">
                        <div className="intro-layer" data-animation="fadeInUp">
                          <h2>
                            Every Pet Deserves
                            <strong>Celebrity Care</strong>
                          </h2>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <p>Strip steak short ribs picanha shoulder bresaola. Pork belly brisket shankle short loin.</p>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <a href="about.html" className="theme_button color3">Make an Appointment</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <LazyLoadImage alt="" src={ `${config.assetPrefix}/static/images/slide02.jpg` } />
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">
                        <div className="intro-layer" data-animation="fadeInUp">
                          <h2>
                            Qualified Personal
                            <strong>Care For Your Pets</strong>
                          </h2>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <p>Strip steak short ribs picanha shoulder bresaola. Pork belly brisket shankle short loin.</p>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <a href="about.html" className="theme_button color3">Make an Appointment</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <LazyLoadImage alt="" src={ `${config.assetPrefix}/static/images/slide03.jpg` } />
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">
                        <div className="intro-layer" data-animation="fadeInUp">
                          <h2>
                            Every Pet Deserves
                            <strong>Celebrity Care</strong>
                          </h2>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <p>Strip steak short ribs picanha shoulder bresaola. Pork belly brisket shankle short loin.</p>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <a href="about.html" className="theme_button color3">Make an Appointment</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="scroll_button_wrap">
          <a href="#about" className="scroll_button">
          <span className="sr-only">scroll down</span>
          </a>
        </div>
      </section>
      <section className="ls page_portfolio section_padding_top_100 section_padding_bottom_75">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="section_header with_icon icon_color3">
                From Our Blog
              </h2>
              <p className="small-text">Our latest news</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="isotope_container isotope row masonry-layout columns_margin_bottom_20">
                {
                  posts.map( post => {
                    return (
                      <div key={ post.id } className="isotope-item with_shadow rounded col-lg-4 col-md-6 col-sm-12">
                        <article className="vertical-item content-padding text-center rounded overflow-hidden">
                          <div className="item-media" />
                          <div className="item-content">
                            <p className="text-center item-meta">
                              <span className="entry-date highlightlinks">
                              <a href="blog-right.html" rel="bookmark">
                              </a>
                              </span>
                            </p>
                            <h4 className="entry-title">
                              <Link route="post" params={{ slug: post.slug }}>
                                <a dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                              </Link>
                            </h4>
                            <Link route="post" params={{ slug: post.slug }}>
                              <a className="read-more"></a>
                            </Link>
                          </div>
                        </article>
                        <style jsx>{`
                          article.vertical-item .item-media {
                            height: 230.6px;
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-image: url(${ post.jetpack_featured_media_url });
                          }
                        `}</style>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="ls ms section_padding_top_100 section_padding_bottom_100">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="section_header with_icon icon_color4">
                What We Do
              </h2>
              <p className="small-text">All kinds of services</p>
            </div>
          </div>
          <div className="row columns_margin_bottom_40">
            <div className="col-md-4 col-sm-6">
              <div className="teaser text-center">
                <LazyLoadImage alt="" src={ `${config.assetPrefix}/static/images/services-icons/01.png` } />
                <h4>
                  <Link route="category" params={{ slug: "nutrition" }}>
                    <a>Dog Nutrition Knowledge</a>
                  </Link>
                </h4>
                <p>
                  Bresaola tail short loin kevin corned beef turducken pork chop short ribs
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="teaser text-center">
                <LazyLoadImage alt="" src={ `${config.assetPrefix}/static/images/services-icons/02.png` } />
                <h4>
                  <Link route="category" params={{ slug: "tips-and-care" }}>
                    <a>Dog Care Tips</a>
                  </Link>
                </h4>
                <p>
                  Bresaola tail short loin kevin corned beef turducken pork chop short ribs
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0">
              <div className="teaser text-center">
                <LazyLoadImage alt="" src={ `${config.assetPrefix}/static/images/services-icons/03.png` } />
                <h4>
                  <Link route="category" params={{ slug: "reviews" }}>
                    <a>Dog Product Reviews</a>
                  </Link>
                </h4>
                <p>
                  Bresaola tail short loin kevin corned beef turducken pork chop short ribs
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <Link route="page" params={{ slug: "about-us" }}>
                <a className="theme_button color4 wide_button">About Us</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
