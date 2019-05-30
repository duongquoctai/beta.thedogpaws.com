import { all, call, delay, put, take, takeLatest } from "redux-saga/effects"
import es6promise from "es6-promise"
import "isomorphic-unfetch"

import { actionTypes } from "./actions"

es6promise.polyfill()

function *loadLatestPosts(action) {
  const apiURL = action.isServer
    ? "https://thedogpaws.com/wp-json/wp/v2/posts?page=1&per_page=12" : "/wp-json/wp/v2/posts?page=1&per_page=12"

  try {
    const res = yield fetch(apiURL)
    const data = yield res.json()

    yield put({
      type: actionTypes.REQUEST_LATEST_POST_SUCCESS,
      data,
      error: ""
    })
  } catch (error) {
    yield put({
      type: actionTypes.REQUEST_LATEST_POST_FAILURE,
      data: [],
      error
    })
  }
}

function *loadSinglePost(action) {
  const apiURL = action.isServer
    ? `https://thedogpaws.com/wp-json/wp/v2/posts?slug=${action.slug}` : `/wp-json/wp/v2/posts?slug=${action.slug}`

  try {
    const res = yield fetch(apiURL)
    const data = yield res.json()

    yield put({
      type: actionTypes.REQUEST_SINGLE_POST_SUCCESS,
      data: data[0],
      error: ""
    })
  } catch (error) {
    yield put({
      type: actionTypes.REQUEST_SINGLE_POST_FAILURE,
      data: null,
      error
    })
  }
}

function *rootSaga () {
  yield all([
    takeLatest(actionTypes.REQUEST_LATEST_POST, loadLatestPosts),
    takeLatest(actionTypes.REQUEST_SINGLE_POST, loadSinglePost)
  ])
}

export default rootSaga
