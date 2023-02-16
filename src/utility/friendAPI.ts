import { User, SearchAction } from "@/types/index";
import { URL } from "@/url";
import { Dispatch } from "react";

export async function fetchUsers(): Promise<User[]> {
  // const res = await fetch("http://localhost:3000/api/users?searchQuery=Hieu");
  
  const res = await fetch(URL + "api/users?searchQuery=Hieu");
  return res.json();
}


export async function addsFriend(
  id: string,
  dispatch: Dispatch<SearchAction>
): Promise<void> {
  return;
}
