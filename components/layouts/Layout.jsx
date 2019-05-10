import Head from "next/head"
import { connect } from "react-redux"

import "../../static/css/fonts.css"
import "../../static/css/bootstrap.css"
import "../../static/css/main.css"

import config from "../../services/publicConfig"

function Layout(props) {
  return (
    <div>
      <Head>
        <title>
          { 
            `${ props.title.replace("&#8211;", "-").replace(/&amp;|&#038;/gi, "&") } - ${ config.siteInformations.name }`
          }
        </title>
      </Head>

      { props.body }
    </div>
  )
}

export default connect(state => state)(Layout)
