async function getSchedule() {
  const teamId = "1610612745"
  const url = `http://data.nba.com/prod/v1/2018/teams/${teamId}/schedule.json`
  const headers = getHeaders("data")
  const result = await axios.get(url, headers, { timeout: 10 })
  // console.log({ result })
}

function getHeaders(type) {
  return {
    host: `${type}.nba.com`,
    referer: `https://${type}.nba.com/`,
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
    "accept-encoding": "Accepflate, sdch",
    "accept-language": "he-IL,he;q=0.8,en-US;q=0.6,en;q=0.4",
    "cache-control": "max-age=0",
    connection: "keep-alive",
  }
}
