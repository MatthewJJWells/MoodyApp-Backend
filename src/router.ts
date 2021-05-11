import express from 'express';
import { getUserRecords, addRecord } from './controllers/record';

const router = express.Router();

router.post('/records', addRecord);

router.get('/records', getUserRecords);

export default router;
