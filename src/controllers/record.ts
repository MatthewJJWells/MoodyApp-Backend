import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserRecords(
  req: { user_id: number },
  res: any,
): Promise<void> {
  // try {
  const records = await prisma.record.findMany({
    where: {
      user_id: req.user_id,
    },
  });
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
