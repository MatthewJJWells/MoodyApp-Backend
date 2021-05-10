import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//this is probably wrong:
// interface User {
// 	id: Int
// 	name: String
// 	email: String
// 	password String
// 	reminder_frequency Int
// }
