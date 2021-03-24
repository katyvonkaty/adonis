import axios from "axios"

const instance = axios.create({
  baseURL:"https://partner-9b329-default-rtdb.firebaseio.com/"
})

export default instance
