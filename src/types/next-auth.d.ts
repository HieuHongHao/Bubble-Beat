import NextAuth from "next-auth"
import { UserWithFriends } from "../types/user"



declare module "next-auth" {
   /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  
  interface Session {
    user: UserWithFriends
  }
}


export module "next-auth"