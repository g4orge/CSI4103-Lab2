import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.listen('5555', ()=> console.log('Server up and running...'));