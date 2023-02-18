import { User } from "@/types/user";
import { URL } from "@/url";
import { API } from "./api";

export async function fetchUsers(): Promise<User[]> {
  const res = await API.get("/users", {
    params: {
      searchQuery: "Hieu",
    },
  });
  return res.data;
}
export async function addFriend(id: string): Promise<void> {
  await API.patch(`/users/${id}`);
}