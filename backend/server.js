import express from 'express';
import dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();
const app = express();
app.use(express.json());

const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC);
app.get('/balance/:address', async (req, res) => {
  const balance = await provider.getBalance(req.params.address);
  res.json({ balance: balance.toString() });
});

app.listen(3001, () => console.log('Backend running on port 3001'));