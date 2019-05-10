import config from "../services/publicConfig"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="no-js">
        <Head>
          <link rel="icon" type="image/x-icon" href={ `${config.assetPrefix}/static/images/thedogpaws.net/favicon.png` } />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src={ `${config.assetPrefix}/static/js/jquery.js` } defer></script>
          <script src={ `${config.assetPrefix}/static/js/jquery.ui.totop.js` } defer></script>
          <script src={ `${config.assetPrefix}/static/js/bootstrap.js` } defer></script>
          <script src={ `${config.assetPrefix}/static/js/modernizr.js` } defer></script>
          <script src={ `${config.assetPrefix}/static/js/compressed.js` } defer></script>
          <script src={ `${config.assetPrefix}/static/js/application.js` } defer></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument