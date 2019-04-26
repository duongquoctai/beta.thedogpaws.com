import React from 'react'
import { Link } from '../routes'
import { connect } from 'react-redux'
import Main from '../src/components/Main'

class Category extends React.Component {
  static async getInitialProps (props) {
    const { query, store, isServer } = props.ctx

    const resCategories = await fetch(`${ isServer ? "https://thedogpaws.com" : "" }/wp-json/wp/v2/categories?slug=${ query.slug }`)
    const categories = await resCategories.json()

    const page = query.page ? parseInt(query.page, 10) : 1
    const resPosts = await fetch(`${ isServer ? "https://thedogpaws.com" : "" }/wp-json/wp/v2/posts?categories=${ categories[0].id }&page=${ page }&per_page=12`)
    const totalPages = resPosts.headers.get('x-wp-totalpages')[0]
    const posts = await resPosts.json()

    return {
      isServer,
      page,
      posts,
      category_name: categories[0].name,
      totalPages: totalPages ? parseInt(totalPages, 10) : 0
    }
  }

  render () {
    const { page, posts, category_name, totalPages } = this.props

    return(
      <div>
        <section className="page_breadcrumbs ds background_cover background_overlay section_padding_top_65 section_padding_bottom_65">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2
                  className="highlight text-uppercase"
                  dangerouslySetInnerHTML={{ __html: category_name }} />
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
                                <Link route="single" params={{ slug: post.slug }}>
                                  <a dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                </Link>
                              </h4>
                              <div className="margin_0" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                              <Link route="single" params={{ slug: post.slug }}>
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
            <div className="row topmargin_60">
              <div className="col-sm-12 text-center">
                <ul className="pagination highlightlinks">
                  <li>
                    <a
                      className={ page <= 1 ? "disabled" : "" }
                      onClick={() => Router.push(`/?page=${ page - 1 }`)}
                    >
                      <span className="sr-only">Prev</span>
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a className="disabled"> { page } </a>
                  </li>
                  <li>
                    <a
                      className={ page >= totalPages ? "disabled" : "" }
                      onClick={() => Router.push(`/?page=${ page + 1 }`)}
                    >
                      <span className="sr-only">Next</span>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect()(Category)
