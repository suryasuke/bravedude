import axios from 'axios'
const baseURL = 'https://api.bravedude.com/feed'

export const submitFeed = async (value)=>{
console.log('value in api' , value)

return await axios.post(`${baseURL}/feedsubmit` , value);
}
