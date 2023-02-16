// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";
import { User } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const { userId } = req.query;
  if (req.method === "GET") {
    const user = await prisma.user.findUnique({
      where: {
        id: userId as string,
      },
    });
    res.json(user as User);
  }
  else if(req.method === "POST"){
    const updateBody = req.body;
  }
}
