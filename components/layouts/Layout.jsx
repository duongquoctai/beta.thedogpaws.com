import Head from "next/head"
import { connect } from "react-redux"
import config from "../../services/publicConfig"
import "../../static/css/main.css"

function Layout(props) {
  let description = ''

  if ( process.browser ) {
    description =
      props.excerpt ? $( props.excerpt ).text() : `${ setTitle(props.description) } - ${ config.siteInformations.name }`
  }
  
  return (
    <div>
      <Head>
        <title>
          { 
            `${ setTitle(props.title) } - ${ config.siteInformations.name }`
          }
        </title>
        <meta name='description' content={ description }></meta>
      </Head>

      { props.body }
    </div>
  )
}

const setTitle = (text) => {
  return text
    .replace("&#8211;", "-")
    .replace(/&amp;|&#038;/gi, "&")
}

export default connect(state => state)(Layout)
