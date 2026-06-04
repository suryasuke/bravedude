import axios from 'axios'
const baseURL = 'https://api.bravedude.com/workshop'

export const submitData = async (value)=>{
console.log('value in api' , value)
return await axios.post(`${baseURL}/register` , value);

}
