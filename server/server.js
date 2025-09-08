import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import userRouter from './routes/user.routes.js';
import chatRouter from './routes/chat.routes.js';
import messageRouter from './routes/message.routes.js';
import creditRouter from './routes/credit.routes.js';
import { stripeWebhooks } from './controllers/webhooks.js';

const app = express();

await connectDB()

// Stripe Webhooks
app.post('/api/stripe', express.raw({type: 'application/json'}),stripeWebhooks)

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/",(req,res)=>{
    res.send("Server is Live!")
})

app.use('/api/user',userRouter)
app.use('/api/chat',chatRouter)
app.use("/api/message",messageRouter)
app.use("/api/credit",creditRouter)


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is listening at port http://localhost:${PORT}`);
    
})