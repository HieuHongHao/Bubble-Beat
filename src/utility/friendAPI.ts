import { User } from "@/types/user";
import { API } from "./api";

export async function fetchUsers(){
  const res = await API.get<User[]>("/users", {
    params: {
      searchQuery: "Hieu",
    },
  });
  return res.data;
}
export async function addFriend(id: string): Promise<void> {
  await API.patch(`/users/${id}`);
}
