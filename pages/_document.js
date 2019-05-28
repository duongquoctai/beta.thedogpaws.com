import config from "../services/publicConfig"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href={ `${config.assetPrefix}/static/css/fonts.css` } />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
          <link rel="icon" type="image/x-icon" href={ `${config.assetPrefix}/static/images/thedogpaws.net/favicon.png` } />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
          <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" />
          <script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js" />
          <script defer src={ `${config.assetPrefix}/static/js/jquery.ui.totop.js` } />
          <script defer src={ `${config.assetPrefix}/static/js/plugins.js` } />
          <script defer src={ `${config.assetPrefix}/static/js/main.js` } />
        </body>
      </Html>
    )
  }
}

export default MyDocument
