import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()


export const  chatSend = async (req,res)=>{
    const { message } = req.body
    try{
            const response = await axios.post(
              "https://api.openai.com/v1/responses",
              {
                model: "gpt-4o-mini",
                input: message,
                store: true
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${process.env.APIKEY}`
                }
              }
            );
        
            const { text } = response.data.output[0].content[0];
           res.json(text)
        
        }

    catch(err){
        res.status(400).json({message : "the chat bit replies 400 may be server issue"});
    }

}
