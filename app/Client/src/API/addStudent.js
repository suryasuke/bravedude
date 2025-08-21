import axios from 'axios'
const baseURL = 'http://localhost:4000/student'

export const addstudent = async (data) => {
    console.log(data , "in API");
    const result = await axios.post(`${baseURL}/add` , data);
    console.log(result , "result from API");
    return result
}

export const giveCertificate = async (data) => {
console.log("give certificate for this " , data);
console.log(data);
if(data){
const result = await axios.post(`${baseURL}/get` , data)
   const id = result.data.user.id;
   const { user } = result.data;
   const response =  await axios.post(`${baseURL}/certificate-generate/${id}` ,user)
   console.log(response , "response from API");
   return response;

}
else{
    return { message: { text: "Please fill all the fields", state: 'error' } }
}
}

export const checkCertificate = async (data)=>{
    console.log("check certificate for this " , data);
    const result = await axios.post(`${baseURL}/check-certificate` , data);
    console.log(result , "CC from API");
    return result;
}
