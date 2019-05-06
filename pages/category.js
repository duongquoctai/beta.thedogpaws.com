import React from 'react'
import { Link } from '../routes'
import { connect } from 'react-redux'

import wpapi from '../services/wpapi'

import Main from '../src/components/Main'
import Pagination from '../src/components/ui/Pagination'

class Category extends React.Component {
  static async getInitialProps ({ ctx }) {
    const currentPage = ctx.query.page ? ctx.query.page : 1

    const categories = await wpapi
      .categories()
      .slug(ctx.query.slug)

    const category = categories[0];

    const posts = await wpapi
      .posts()
      .categories(category.id)
      .page(currentPage)
      .perPage(10)

    return { category, posts, paging: posts._paging };
  }

  render () {
    const { category, posts } = this.props

    return(
      <div>
        <section className="page_breadcrumbs ds background_cover background_overlay section_padding_top_65 section_padding_bottom_65">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2
                  className="highlight text-uppercase"
                  dangerouslySetInnerHTML={{ __html: category.name }} />
              </div>
            </div>
          </div>
        </section>
        <section className="ls page_portfolio section_padding_top_100 section_padding_bottom_75">
          <div className="container">
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

export default connect()(Category)
