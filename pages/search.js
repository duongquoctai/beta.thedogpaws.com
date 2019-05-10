import React from "react"
import { Link } from "../routes"
import wpapi from "../services/wpapi"
import config from "../services/publicConfig"
import Layout from "../components/layouts/Layout"
import Pagination from "../components/ui/Pagination"
import { LazyLoadImage } from "react-lazy-load-image-component"

class Search extends React.Component {
  static async getInitialProps ({ ctx }) {
    const currentPage = ctx.query.page ? ctx.query.page : 1

    const posts = await wpapi
      .posts()
      .search(ctx.query.q)
      .page(currentPage)
      .perPage(config.postsPerPage.searchPage)

    return { posts, paging: posts._paging }
  }

  render () {
    const { posts, paging } = this.props

    return(
      <Layout
        body={ Body({ posts, paging }) }
        title={ config.siteInformations.searchPageTitle } />
    )
  }
}

function Body(props) {
  const { posts, paging } = props

  return(
    <div>
      <section className="ls page_portfolio section_padding_top_100 section_padding_bottom_75">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="isotope_container isotope row masonry-layout columns_margin_bottom_20">
                {
                  posts.length === 0
                  ? <h1 className="col-sm-12 text-center">
                      Not found anything for you!!!
                    </h1>
                  : posts.map( post => {
                      return (
                        <div key={ post.id } className="isotope-item with_shadow rounded col-lg-4 col-md-6 col-sm-12">
                          <article className="vertical-item content-padding text-center rounded overflow-hidden">
                            <div className="item-media">
                              <LazyLoadImage alt="" src={ post.jetpack_featured_media_url } />
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
          { paging === undefined
            ? null
            : <div className="row topmargin_60">
                <div className="col-sm-12 text-center">
                  <ul className="pagination highlightlinks">
                    <li>
                      <Pagination totalPages={ paging.totalPages } />
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

export default Search
