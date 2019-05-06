import React from 'react'
import { Link } from '../routes'
import { connect } from 'react-redux'

import wpapi from '../services/wpapi'

import Main from '../src/components/Main'
import Pagination from '../src/components/ui/Pagination'

class Index extends React.Component {
  static async getInitialProps ({ ctx }) {
    const currentPage = ctx.query.page ? ctx.query.page : 1

    const posts = await wpapi
      .posts()
      .page(currentPage)
      .perPage(12)

    return { posts, paging: posts._paging }
  }

  render () {
    const { posts } = this.props

    return(
      <div>
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
                  <img src={require('../src/assets/images/services-icons/01.png')} alt="" />
                  <h4>
                    <Link route="category" params={{ slug: 'nutrition' }}>
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
                  <img src={require('../src/assets/images/services-icons/02.png')} alt="" />
                  <h4>
                    <Link route="category" params={{ slug: 'tips-and-care' }}>
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
                  <img src={require('../src/assets/images/services-icons/03.png')} alt="" />
                  <h4>
                    <Link route="category" params={{ slug: 'reviews' }}>
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
                <Link route="page" params={{ slug: 'about-us' }}>
                  <a className="theme_button color4 wide_button">About Us</a>
                </Link>
              </div>
            </div>
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
                            <div className="item-media">
                              <img src={ post.jetpack_featured_media_url } alt="" />
                            </div>
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
                              <div className="margin_0" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                              <Link route="post" params={{ slug: post.slug }}>
                                <a className="read-more"></a>
                              </Link>
                            </div>
                          </article>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            { this.props.paging === undefined
              ? null
              : <div className="row topmargin_60">
                  <div className="col-sm-12 text-center">
                    <ul className="pagination highlightlinks">
                      <li>
                        <Pagination totalPages={ this.props.paging.totalPages } />
                      </li>
                    </ul>
                  </div>
                </div>
            }
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  error: state.error
})

export default connect()(Index)
