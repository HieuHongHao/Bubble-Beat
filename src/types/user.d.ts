import { Prisma, User } from "@prisma/client";

const userWithFriends = Prisma.validator<Prisma.UserArgs>()({
  include: { friendWith: true, friendBy: true },
});
export type User = User;
export type UserWithFriends = Prisma.UserGetPayload<
  typeof userWithFriends
> | null;
