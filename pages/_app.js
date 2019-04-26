import App, { Container } from 'next/app'

import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from '../store'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <div>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
