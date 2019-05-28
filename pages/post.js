import React from "react"
import moment from "moment"
import Error from "next/error"
import { Link } from "../routes"
import wpapi from "../services/wpapi"
import Layout from "../components/layouts/Layout"
import ReactDisqusComments from "react-disqus-comments"
import { LazyLoadImage } from "react-lazy-load-image-component"

class Post extends React.Component {
  static async getInitialProps ({ ctx }) {
    const recentPosts = await wpapi
      .posts()
      .page(1)
      .perPage(3)

    const posts = await wpapi
      .posts()
      .slug(ctx.query.slug)

    return { post: posts[0], recentPosts }
  }

  render () {
    const { post, recentPosts } = this.props

    if (post == undefined) {
      return <Error statusCode="404" />
    }

    return(
      <Layout
        title={ post.title.rendered }
        body={ Body({ post, recentPosts }) }
        excerpt={ post.excerpt.rendered } />
    )
  }
}

function Body(props) {
  const { post, recentPosts } = props

  return(
    <div>
      <section className="page_breadcrumbs ds background_cover background_overlay section_padding_top_65 section_padding_bottom_65">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="highlight">Way to Be a Better Dog Owner</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="ls section_padding_top_100 section_padding_bottom_100 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-8 col-lg-8">
              <article className="single-post vertical-item content-padding big-padding post with_shadow rounded overflow-hidden">
                <div className="entry-thumbnail item-media">
                  <LazyLoadImage alt={ post.title.rendered } src={ post.jetpack_featured_media_url } />
                </div>
                <div className="item-content">
                  <header className="entry-header">
                    <h1
                      className="entry-title topmargin_0"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </header>
                  <div
                    className="entry-content"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                </div>
              </article>
              <div className="with_padding big-padding with_shadow rounded comments-wrapper">
                <ReactDisqusComments
                  url={ post.link }
                  shortname="the-dog-paws"
                  identifier={ post.slug }
                  title={ post.title.rendered.replace("&#8211;", "-") } />
              </div>
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
        </div>
      </section>
    </div>
  )
}

export default Post
