import axios from 'axios'
const baseURL = 'http://localhost:4000/collab'

export const submitCollab = async (data) => {
    console.log(data , "in API");
    const result = await axios.post(`${baseURL}/submit` , data);
    console.log(result , "result from API");
    return result
}
