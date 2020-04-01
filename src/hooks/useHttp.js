import { useReducer, useCallback } from "react"
import axios from "axios"
const { editorLink } = require("./_config")

const initialState = {
  loading: false,
  error: null,
  data: null,
  identifier: null,
}

const httpReducer = (curHttpState, { type, identifier, data, error }) => {
  switch (type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        identifier,
      }
    case "RESPONSE":
      return {
        ...curHttpState,
        loading: false,
        data,
      }
    case "ERROR":
      return { loading: false, error }
    case "CLEAR":
      return initialState
    default:
      throw new Error("Should not be reached!")
  }
}

export const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState)

  const clearHttpState = useCallback(() => dispatchHttp({ type: "CLEAR" }), [])

  const sendRequest = useCallback(async ({ body = {}, identifier }) => {
    dispatchHttp({ type: "SEND", identifier })

    body = Object.assign(body, { client: "bbh" })

    try {
      const { data } = await axios({
        url: editorLink,
        method: "POST",
        data: body,
      })

      dispatchHttp({
        type: "RESPONSE",
        data,
      })
    } catch (e) {
      dispatchHttp({
        type: "ERROR",
        error: "Something went wrong!",
      })
    }
  }, [])

  return {
    httpState,
    sendRequest,
    clearHttpState,
  }
}

// export default useHttp

// function fetchArticles(apiIdentifier, category, allocation, allocations) {
//   // console.log("fetchArticles worked")
//   return function(dispatch) {
//     dispatch({
//       type: actionTypes.REQUESTED_API,
//       apiIdentifier,
//     })

//     // console.log({ category, allocation, allocations })
//     return axios.post(`${}`, { client: "bbh" }).then(({ data }) => {
//       // console.log("data received from api")
//       // console.log({ data })
//       dispatch({
//         type: actionTypes.REQUESTED_API,
//         apiIdentifier,
//       })
//       dispatch({
//         type: actionTypes.RECEIVED_ARTICLES,
//         category,
//         allocation,
//         data,
//       })
//       dispatch({
//         type: actionTypes.STOP_LOADING,
//       })
//       // if (allocation) {
//       //   dispatch({
//       //     type: actionTypes.NICHE_MODE,
//       //   })
//       // } else {
//       //   dispatch({
//       //     type: actionTypes.CATEGORY_MODE,
//       //   })
//       // }
//     })
//   }
// }
