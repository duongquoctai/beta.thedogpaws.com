import Head from "next/head"
import { connect } from "react-redux"
import config from "../../services/publicConfig"
import "../../static/css/main.css"

function Layout(props) {
  let description = ""

  if (process.browser) {
    description = props.excerpt ? $(props.excerpt).text() : config.site.description
  }
  
  return (
    <div>
      <Head>
        <meta name="description" content={ description }></meta>
        <title>{
          `${ setTitle(props.title) } - ${ config.site.name }`
        }</title>
      </Head>

      { props.body }
    </div>
  )
}

const setTitle = (title) => {
  return title
    ? title.replace(/&#8211;/gi, "-").replace(/&amp;|&#038;/gi, "&") : "We Are Dog Lovers"
}

export default connect(state => state)(Layout)
