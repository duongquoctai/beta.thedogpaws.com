import React from "react"
import wpapi from "../services/wpapi"
import Layout from "../components/layouts/Layout"

class Page extends React.Component {
  static async getInitialProps ({ ctx }) {
    const pages = await wpapi
      .pages()
      .slug(ctx.query.slug)

    return { pageContent: pages[0] }
  }

  render () {
    const { pageContent } = this.props

    return(
      <Layout
        body={ Body({ pageContent }) }
        title={ pageContent.title.rendered }
        excerpt={ pageContent.excerpt.rendered } />
    )
  }
}

function Body(props) {
  const { pageContent } = props

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
      <section id="about" className="ls section_padding_top_100 section_padding_bottom_100">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2
                className="section_header with_icon icon_color"
                dangerouslySetInnerHTML={{ __html: pageContent.title.rendered }}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              dangerouslySetInnerHTML={{ __html: pageContent.content.rendered }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
