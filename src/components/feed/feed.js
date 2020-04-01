import React from "react"
import { useHttp } from "../../hooks"
import { ContentList } from "../content/content"

export const Feed = ({ searchTerms }) => {
  const { httpState, sendRequest, clearHttpState } = useHttp()
  const { loading, data, error, identifier } = httpState

  let body = {}
  if (searchTerms) {
    body = { searchTerms }
  }

  React.useEffect(() => {
    sendRequest({ body })
  }, [sendRequest, searchTerms])

  return <ContentList data={data} loading={loading} />
}
