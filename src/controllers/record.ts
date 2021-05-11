import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log('database is connected, thanks to Berta!');
  })
  .catch((error) => {
    console.error('not connected, sadness: ', error);
  });

export async function getUserRecords(
  req: { user_id: number },
  // res: {
  //   id: number;
  //   user_id: number;
  //   dateTime: Date;
  //   mood_text: string;
  //   personal_note: string;
  //   shared: boolean;
  // },
): Promise<unknown> {
  // try {
  const records = await prisma.record.findMany({
    where: {
      user_id: {
        equals: req.user_id,
      },
    },
  });
  return records;
  // }
  // catch {
  // }
}

export async function addRecord(
  req: { user_id: number },
  res: any,
): Promise<void> {
  console.log('Tanja you are fantastic!!!');
}
