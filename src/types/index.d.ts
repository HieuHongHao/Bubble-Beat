import prisma from "@/db";
import { useSession } from "next-auth/react";
import { Prisma, User } from "@prisma/client";
import { DefaultSession } from "next-auth";
import { ChangeEventHandler } from "react";

const userWithFriends = Prisma.validator<Prisma.UserArgs>()({
  include: { friendWith: true, friendBy: true },
});
export type User = User;
export type UserWithFriends = Prisma.UserGetPayload<
  typeof userWithFriends
> | null;
export type SessionContext = ReturnType<typeof useSession> | null;
export type MenuItem = {
  name: string;
  colorScheme: string;
};
export type SearchBarProps = {
  backgroundColor: string;
  placeHolder: string;
  placeHolderColor: string;
  handler?: ChangeEventHandler<HTMLInputElement>;
};
export type SearchSpace = {
  friends: User[];
  searchResults: User[];
  query: string;
};
export type SearchAction = {
  type: string,
  payload: User[] | SearchSpace
}
export type SearchSpaceReducer = (
state: SearchSpace,
  action: SearchAction
) => SearchSpace;
