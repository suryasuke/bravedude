import axios from 'axios'

const baseURL = 'http://localhost:4000/enroll'

export const getEnrolls = async()=>{
try{
const result = await axios.get(`${baseURL}/students`)
return result.data; 

}catch(error){
 console.log("Error got in API get" ,error.message)
 throw error
}
}

export const submitEnroll = async(detailsOfEnroll)=>{
    console.log("in api" , detailsOfEnroll)
    try{
       const result =  await axios.post(`${baseURL}/submit` , detailsOfEnroll)
       console.log("reply data" , result)
       if(result.data){
        return result.data
       }
        
    }catch(error){
        console.log("error in posting the enroll")
        throw error
    }
}