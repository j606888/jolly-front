import { HOST } from '../config/settings'
import apiPath from '../config/apiPath'

function sendRequest(method, url) {
  const token = localStorage.getItem("token")
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  }

  return fetch(`${HOST}${url}`, options).then((res) => res.json())
}

export const info = () => {
  return sendRequest("GET", apiPath.users.info)
}