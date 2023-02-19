import { useSession } from "next-auth/react";
import { ChangeEventHandler } from "react";
import { User } from "./user";

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

export type Init = {
  type: "init";
  payload: User[] | SearchSpace
}

export type AddFriend = {
  type: "addFriend",
  friendId: string
}
export type SearchAction = Init | AddFriend
export type SearchSpaceReducer = (
  state: SearchSpace,
  action: SearchAction
) => SearchSpace;


