import dotenv = require('dotenv');
import express from 'express';
import cors from 'cors';

import router from './router';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const ROUTER_IP = String(process.env.ROUTER_IP);

app.use(express.json());
app.use(cors());

app.use(router);

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(+PORT, ROUTER_IP, () => {
  console.log(`Server is running on ${ROUTER_IP}:${PORT} 🚀`);
});
