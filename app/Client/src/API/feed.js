import axios from 'axios'
const baseURL = 'http://16.171.14.101:4000/feed'

export const submitFeed = async (value)=>{
console.log('value in api' , value)

return await axios.post(`${baseURL}/feedsubmit` , value);
}
