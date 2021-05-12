import { Request, Response } from 'express';
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

export async function addRecord(req: Request, res: Response): Promise<void> {
  const newRecord = req.body.record;
  try {
    await prisma.record.create({ data: newRecord });
    res.status(201);
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
}

export async function getUserRecords(
  req: Request,
  res: Response,
): Promise<void> {
  const user_id: number = +req.params.user_id;
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
