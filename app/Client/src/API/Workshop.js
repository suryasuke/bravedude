import axios from 'axios'
const baseURL = 'http://localhost:4000/workshop'

export const submitData = async (value)=>{
console.log('value in api' , value)
return await axios.post(`${baseURL}/register` , value);

}