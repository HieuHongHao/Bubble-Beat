// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";
import {User} from "@prisma/client"
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  const searchQuery = req.query.searchQuery as string;
  const session = await getSession({req});
  const users = (await prisma.user.findMany({
    where: {
      name: {
        search: searchQuery,
      },
      id:{not: session?.user?.id}
    },
  }));
  res.status(200).json(users);
}
