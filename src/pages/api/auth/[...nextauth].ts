import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../db";
import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";




export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.google_client_id!,
      clientSecret: process.env.google_client_secret!,
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: JWT;
      user: User;
    }) {
      session.user = await prisma.user.findFirst({
        where: {
          name: session?.user?.name,
        },
        include:{
          friendWith:true,
          friendBy:true
        },
      });
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
};




export default NextAuth(authOptions);
