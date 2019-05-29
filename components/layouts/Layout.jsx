import Head from "next/head"
import { connect } from "react-redux"
import { AllHtmlEntities } from "html-entities"
import config from "../../services/publicConfig"

const entities = new AllHtmlEntities()

function Layout(props) {
  const img = (props.image || '')
  const url = `${config.site.domainName}${props.asPath || ''}`
  const title = `${entitiesDecode(props.title)} - ${config.site.name}`
  const desc = props.excerpt ? entitiesDecode(props.excerpt) : config.site.description

  return (
    <div>
      <Head>
        {/* HTML Meta Tags */}
        <title>{ title }</title>
        <meta name="description" content={ desc } />

        {/* Google / Search Engine Tags */}
        <meta itemProp="description" content={ desc } />
        <meta itemProp="name" content={ title } />
        <meta itemProp="image" content={ img } />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:description" content={ desc } />
        <meta property="og:title" content={ title } />
        <meta property="og:image" content={ img } />
        <meta property="og:url" content={ url } />

        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:description" content={ desc } />
        <meta property="twitter:title" content={ title } />
        <meta property="twitter:image" content={ img } />
        <meta property="twitter:url" content={ url } />
      </Head>

      { props.body }
    </div>
  )
}

const entitiesDecode = (string) => {
  return string ? entities.decode(string.replace(/<(?:.|\n)*?>/gm, '')) : "We Are Dog Lovers!!!"
}

export default connect(state => state)(Layout)
