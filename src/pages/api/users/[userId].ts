// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";
import { User } from "@prisma/client";
import { getSession } from "next-auth/react";


type Error = {
  message: string;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
  const { userId } = req.query;
  const session = await getSession({ req });
  if (req.method === "GET") {
    const user = await prisma.user.findUnique({
      where: {
        id: userId as string,
      },
    });
    res.json(user as User);
  } else if (req.method === "PATCH") {
    if (userId === session?.user?.id) {
      res.json({ message: "Can not self add to friend list" });
    } else {
      const user = await prisma.user.update({
        where: {
          id: session?.user?.id as string,
        },
        data: {
          friendWith: {
            connect: [{ id: userId as string }],
          },
          friendBy: {
            connect: [{ id: userId as string }],
          },
        },
      });
      res.json(user as User);
    }
  }
}
