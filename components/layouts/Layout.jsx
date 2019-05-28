import Head from "next/head"
import { connect } from "react-redux"
import config from "../../services/publicConfig"

function Layout(props) {
  const description = props.excerpt
    ? props.excerpt.replace(/&hellip;/gi, "...").replace(/<(?:.|\n)*?>/gm, "") : config.site.description

  return (
    <div>
      <Head>
        <title>{
          `${ setTitle(props.title) } - ${ config.site.name }`
        }</title>

        <meta name="description" content={ description }></meta>
        <meta property="og:url" content="" />
        <meta property="og:title" content={ setTitle(props.title) } />
        <meta property="og:description" content={ description } />
        <meta property="og:image" content={ props.image } />
        <meta property="og:type" content="article" />
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
