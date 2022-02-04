import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const prisma = new PrismaClient({
  log: ['query'],
})

export default async (req: any, res: any) => {

//  how to get context with $prisma on it ? 

  return await prisma.post.findMany()
}
