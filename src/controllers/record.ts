import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log('database is connected, life is good!');
  })
  .catch((error) => {
    console.error('not connected, sadness: ', error);
  });

export async function getUserRecords(
  req: express.Request,
  res: express.Response,
): Promise<void> {
  const user_id: number = req.body.user_id;
  try {
    const records = await prisma.record.findMany({
      where: {
        user_id: user_id,
      },
    });
    res.status(200);
    res.send(records);
  } catch (error) {
    console.log(error);
    res.end();
  }
}

export async function addRecord(
  req: express.Request,
  res: express.Response,
): Promise<void> {
  const newRecord = req.body.record;
  console.log('newRecord', newRecord);
  try {
    await prisma.record.create({ data: newRecord });
    res.status(201);
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
}
