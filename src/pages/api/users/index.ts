// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";
import {User} from "@prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  const searchQuery = req.query.searchQuery as string;
  
  const users = (await prisma.user.findMany({
    where: {
      name: {
        search: searchQuery,
      },
    },
  }));
  res.status(200).json(users);
}
