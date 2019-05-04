// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="no-js">
        <Head>
          <link rel="icon" type="image/x-icon" href={require('../src/assets/images/favicon.png')} />
          <link
            rel="stylesheet"
            crossOrigin="anonymous"
            href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          />
          <script src="/static/js/jquery.js"></script>
          <script src="/static/js/jquery-ui.js"></script>
          <script src="/static/js/jquery.ui.totop.js"></script>
          <script src="/static/js/bootstrap.js"></script>
          <script src="/static/js/modernizr.js"></script>
          <script src="/static/js/compressed.js"></script>
          <script src="/static/js/application.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument