import { actionTypes } from './actions'

export const exampleInitialState = {
  posts: [],
  post: null,
  error: ""
}

function reducer (state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_LATEST_POST_FAILURE:
      return {
        ...state,
        ...{ posts: action.data, error: action.error }
      }

    case actionTypes.REQUEST_LATEST_POST_SUCCESS:
      return {
        ...state,
        ...{ posts: action.data, error: action.error }
      }

    case actionTypes.REQUEST_SINGLE_POST_FAILURE:
      return {
        ...state,
        ...{ post: action.data, error: action.error }
      }

    case actionTypes.REQUEST_SINGLE_POST_SUCCESS:
      return {
        ...state,
        ...{ post: action.data, error: action.error }
      }

    default:
      return state
  }
}

export default reducer
