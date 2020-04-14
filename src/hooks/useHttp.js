import { useReducer, useCallback } from "react"
import axios from "axios"
const links = require("./_config")

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

  const sendRequest = useCallback(async ({ body = {}, identifier, api }) => {
    dispatchHttp({ type: "SEND", identifier })
    if (api === "editor") {
      body = Object.assign(body, { client: "noisefree" })
    }

    try {
      const { data } = await axios({
        url: links[api],
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
