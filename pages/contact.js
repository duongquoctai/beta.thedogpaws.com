import React from 'react'
import { connect } from 'react-redux'
import Main from '../src/components/Main'

class Contact extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx

    const res     = await fetch(`${ isServer ? "https://thedogpaws.com" : "" }/wp-json/wp/v2/pages?slug=contact-us`)
    const pages   = await res.json()

    return { isServer, pageContent: pages[0] }
  }

  render () {
    const { pageContent } = this.props

    return(
      <Main
        body={ Body({ pageContent }) } />
    )
  }
}

function Body(props) {
  const { pageContent } = props

  return (
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

export default connect()(Contact)
