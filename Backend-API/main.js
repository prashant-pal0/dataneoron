import express from 'express'
import dotenv from "dotenv";
import { connectDB } from './database/db.connection.js';
import appRouter from './routes/aap.routes.js';
import cors from 'cors';

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());



const port = process.env.port || 5001

connectDB()
appRouter(app, express)
app.listen(port, ()=> {
    console.log(`your project run on ${port}`)
})

