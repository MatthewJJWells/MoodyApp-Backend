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
  req: {
    body: { user_id: number };
  },
  res: any,
): Promise<void> {
  const user_id: number = req.body.user_id;
  const records = await prisma.record.findMany({
    where: {
      user_id: user_id,
    },
  });
  res.send(records);
}

export async function addRecord(req: any, res: any): Promise<void> {
  const newRecord = req.body.record;
  console.log('newRecord', newRecord);
  await prisma.record.create({ data: newRecord });
  res.end();
}
