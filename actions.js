export const actionTypes = {
  REQUEST_LATEST_POST_FAILURE: "REQUEST_LATEST_POST_FAILURE",
  REQUEST_LATEST_POST_SUCCESS: "REQUEST_LATEST_POST_SUCCESS",
  REQUEST_LATEST_POST: "REQUEST_LATEST_POST",
  REQUEST_SINGLE_POST_FAILURE: "REQUEST_SINGLE_POST_FAILURE",
  REQUEST_SINGLE_POST_SUCCESS: "REQUEST_SINGLE_POST_SUCCESS",
  REQUEST_SINGLE_POST: "REQUEST_SINGLE_POST"
}

export function requestLatestPosts(isServer) {
  return {
    type: actionTypes.REQUEST_LATEST_POST,
    isServer
  }
}

export function requestSinglePost(isServer, slug) {
  return {
    type: actionTypes.REQUEST_SINGLE_POST,
    isServer,
    slug
  }
}