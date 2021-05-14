import dotenv = require('dotenv');
import express from 'express';
import cors from 'cors';

import router from './router';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(router);

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(+PORT, '10.10.22.237', () => {
  console.log(`Server is running at http://10.10.22.237:${PORT} 🚀`);
});
