import express from 'express';
import "reflect-metadata";
import "dotenv/config";
import { router } from './shared/http/routes';
import { createConnection } from 'typeorm';
import cors from 'cors';


const app = express();

createConnection();

app.use(cors());
app.use(express.json());
app.use("/api", router);



export {app};