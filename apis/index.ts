import axios from 'axios'
const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com'
})

export default request