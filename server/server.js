import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import userRouter from './routes/user.routes.js';

const app = express();

await connectDB()

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/",(req,res)=>{
    res.send("Server is Live!")
})

app.use('/api/user',userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is listening at port http://localhost:${PORT}`);
    
})