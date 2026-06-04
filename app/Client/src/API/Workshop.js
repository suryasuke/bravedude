import axios from 'axios'
const baseURL = 'http://16.171.14.101:4000/workshop'

export const submitData = async (value)=>{
console.log('value in api' , value)
return await axios.post(`${baseURL}/register` , value);

}
