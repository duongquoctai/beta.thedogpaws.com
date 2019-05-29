import Head from "next/head"
import { connect } from "react-redux"
import { AllHtmlEntities } from "html-entities"
import config from "../../services/publicConfig"

const entities = new AllHtmlEntities()

function Layout(props) {
  const img = (props.image || '')
  const url = `${config.site.domainName}${props.asPath || ''}`
  const title = `${entitiesDecode(props.title)} - ${config.site.name}`
  const description = props.excerpt ? entitiesDecode(props.excerpt) : config.site.description

  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ description }></meta>
        <meta property="og:description" content={ description } ></meta>
        <meta property="og:title" content={ title } ></meta>
        <meta property="og:type" content="article" ></meta>
        <meta property="og:image" content={ img } ></meta>
        <meta property="og:url" content={ url } ></meta>
      </Head>

      { props.body }
    </div>
  )
}

const entitiesDecode = (string) => {
  return string ? entities.decode(string.replace(/<(?:.|\n)*?>/gm, '')) : "We Are Dog Lovers!!!"
}

export default connect(state => state)(Layout)
