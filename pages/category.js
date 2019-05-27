import React from "react"
import moment from "moment"
import { Link } from "../routes"
import wpapi from "../services/wpapi"
import config from "../services/publicConfig"
import Layout from "../components/layouts/Layout"
import Pagination from "../components/ui/Pagination"
import { LazyLoadImage } from "react-lazy-load-image-component"

class Category extends React.Component {
  static async getInitialProps ({ ctx }) {
    const currentPage = ctx.query.page ? ctx.query.page : 1

    const categories = await wpapi
      .categories()
      .slug(ctx.query.slug)

    const category = categories[0];

    const recentPosts = await wpapi
      .posts()
      .page(1)
      .perPage(config.postsPerPage.recentPosts)

    const posts = await wpapi
      .posts()
      .categories(category.id)
      .page(currentPage)
      .perPage(config.postsPerPage.searchPage)

    return { category, posts, recentPosts, paging: posts._paging };
  }

  render () {
    const { category, posts, recentPosts, paging } = this.props

    return(
      <Layout
        body={ Body({ category, posts, recentPosts, paging }) }
        title={ category.name }
        description={ category.name } />
    )
  }
}

function Body(props) {
  const { category, posts, recentPosts, paging } = props

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
            <div className="col-sm-7 col-md-8 col-lg-8">
              {
                posts.map( post => {
                  return (                   
                    <article key={ post.id } className="vertical-item content-padding big-padding post format-standard with_shadow rounded overflow-hidden">
                      <div className="item-media entry-thumbnail">
                        <LazyLoadImage alt={ post.title.rendered } src={ post.jetpack_featured_media_url } />
                      </div>
                      <div className="item-content entry-content">
                        <header className="entry-header">
                          <h4 className="entry-title hover-color3">
                            <Link route="post" params={{ slug: post.slug }}>
                            <a dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            </Link>
                          </h4>
                        </header>
                        <p className="margin_0" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                      </div>
                    </article>
                  )
                })
              }
            </div>
            <aside className="col-sm-5 col-md-4 col-lg-4">
              <div className="widget widget_recent_posts">
                <h3 className="widget-title poppins text-center">Recent Posts</h3>
                <ul className="media-list">
                  {
                    recentPosts.map( post => {
                      return (
                        <li className="media" key={ post.id }>
                          <div className="media-left media-middle">
                            <LazyLoadImage alt={ post.title.rendered } src={ post.jetpack_featured_media_url } />
                          </div>
                          <div className="media-body media-middle">
                            <h4>
                              <Link route="post" params={{ slug: post.slug }}>
                                <a dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                              </Link>
                            </h4>
                            <span className="entry-date highlight3 small-text">
                            <time className="entry-date" dateTime={ post.date }>
                              { moment().from(post.date) }
                            </time>
                            </span>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="widget widget_search">
                <h3 className="widget-title poppins text-center">Search on Website</h3>
                <form method="get" className="searchform" action="/search">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="widget-search">Search for:</label>
                    <input id="widget-search" type="text" name="q" className="form-control" placeholder="Search Keyword" />
                  </div>
                  <button type="submit" className="theme_button color1">Search</button>
                </form>
              </div>
            </aside>
          </div>
          <Pagination totalPages={ paging.totalPages } />
        </div>
      </section>
    </div>
  )
}

export default Category
