import express, { Request, Response } from "express";
import cors from "cors";
import Petshop from "./types/petshop";
import bodyParser from 'body-parser';

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

app.post('/calcular',(req: Request, res: Response) =>{
  const {dogPequeno, dogGrande, date} = req.body
});

app.get("/calcular", async (req: Request, res: Response) => {
  try {
    await Petshop(req, res)
  } catch (e: any) {
    res.send(e.message);
  }
});

const server = app.listen(5000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});