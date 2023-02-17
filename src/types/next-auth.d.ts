import NextAuth from "next-auth"
import { PrismaUser, UserWithFriends } from "./menu"



declare module "next-auth" {
   /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  
  interface Session {
    user: UserWithFriends
  }
}


export module "next-auth"