import { ChangeEventHandler} from "react";
import {User} from "./user"

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
    type: string;
    payload: User[] | SearchSpace;
  };
  export type SearchSpaceReducer = (
    state: SearchSpace,
    action: SearchAction
  ) => SearchSpace;
  