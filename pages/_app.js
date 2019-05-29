import App, { Container } from "next/app"

import React from "react"
import Router from "next/router"
import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper"
import withReduxSaga from "next-redux-saga"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
import createStore from "../store"
import "../static/css/main.css"

Router.events.on("routeChangeStart", url => {
  $(".preloader").fadeIn()
})

Router.events.on("routeChangeComplete", url => {
  $(".preloader").fadeOut(); $(".mobile-active").removeClass("mobile-active")
})

Router.events.on("routeChangeError", url => {
  $(".preloader").fadeOut(); $(".mobile-active").removeClass("mobile-active")
})

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { asPath: ctx.asPath, pageProps }
  }

  render () {
    const { Component, asPath, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={ store }>
          <div>
            <Header asPath={ asPath } />
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
