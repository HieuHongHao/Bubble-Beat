// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/db'
import { getSession } from 'next-auth/react'
import { UserWithFriends } from '@/types';







export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserWithFriends>
  ) {
  const session = await getSession({req});
  const user = await prisma.user.findFirst({
    where:{
      name:session?.user?.name
    },
    include:{
      friendBy:true,
      friendWith:true
    }
  })
  res.status(200).json(user!);
}



