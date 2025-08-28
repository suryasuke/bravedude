import axios from 'axios'
const baseURL = 'http://localhost:4000/comments'

export const getComments = async ()=>{
return await axios.post(`${baseURL}/get`);
}