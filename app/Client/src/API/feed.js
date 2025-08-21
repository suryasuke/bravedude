import axios from 'axios'
const baseURL = 'http://localhost:4000/feed'

export const submitFeed = async (value)=>{
console.log('value in api' , value)

return await axios.post(`${baseURL}/feedsubmit` , value);
}