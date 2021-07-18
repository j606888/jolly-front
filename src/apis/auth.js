import { HOST } from "../config/settings"
import apiPath from "../config/apiPath"

function sendRequest(method, url, data) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }

  return fetch(`${HOST}${url}`, options).then((res) => res.json())
}

export const register = (data) => {
  return sendRequest('POST', apiPath.auth.register, data)
}

export const login = (data) => {
  return sendRequest("POST", apiPath.auth.login, data)
}
