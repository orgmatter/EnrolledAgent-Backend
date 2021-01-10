import axios from "redux/axios/index"

export function availableSponsors() {
  return axios.get('/sponsor').then(function (response) {
     return response.data;
  })
}
