import express from 'express';
import { db } from './db/db.js';
import cors from 'cors'
import EnrollRoute from './Routes/EnrollRoute.js'
import feedRoute from './Routes/feedRoute.js'
import  collabRoute from './Routes/collabRoute.js'
import studentRoute from './Routes/studentRoute.js';
import WorkshopRoute from './Routes/WorkshopRoute.js'
import chatRoute from './Routes/chatRoute.js'



const app = express();
const port = 4000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use("/enroll" , EnrollRoute)
app.use("/feed" , feedRoute)
app.use("/collab" , collabRoute)
app.use("/student" , studentRoute)
app.use("/workshop" , WorkshopRoute)
app.use("/chat" , chatRoute)
db.connect()
  .then(() => console.log('DB is connected'))
  .catch(err => console.log('DB connection failed:', err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

