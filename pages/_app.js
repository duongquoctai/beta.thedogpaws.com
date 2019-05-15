import App, { Container } from "next/app"

import React from "react"
import Router from "next/router"
import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper"
import withReduxSaga from "next-redux-saga"

import createStore from "../store"

import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"

Router.events.on('routeChangeStart', url => {
  $(".preloader").fadeIn()
})

Router.events.on('routeChangeComplete', url => {
  $(".preloader").fadeOut()
})

Router.events.on('routeChangeError', url => {
  $(".preloader").fadeOut()
})

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
        <Provider store={ store }>
          <div>
            <Header />
            <Component { ...pageProps } />
            <Footer />
            <div className="preloader">
              <div className="preloader_image"></div>
            </div>
          </div>
        </Provider>

        <style jsx>{`
          .preloader {
            display: none;
          }
        `}</style>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
