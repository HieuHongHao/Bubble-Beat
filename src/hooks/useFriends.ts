import { UserContext } from "@/context/UserContext";
import { useReducer, useContext, Dispatch, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchSpace, SearchSpaceReducer, SearchAction } from "@/types/search";
import { fetchUsers } from "@/utility/friendAPI";



const reducer: SearchSpaceReducer = (
  state: SearchSpace,
  action: SearchAction
) => {
  let { friends, searchResults, query } = action.payload as SearchSpace;
  let {friendId} = action;
  switch (action.type) {
    case "init":
      return {
        searchResults,
        friends,
        query,
      };
    case "addFriend":
      return {
        searchResults,
        friends,
        query,
      };
    default:
      return {
        friends: [],
        searchResults: [],
        query: "",
      };
  }
};

export default function useFriends(): [SearchSpace, Dispatch<SearchAction>] {
  const { status, data } = useQuery({
    queryKey: ["usersWithFriends"],
    queryFn: fetchUsers,
  });
  const [searchSpace, dispatch] = useReducer(reducer, {
    friends: [],
    searchResults: [],
    query: "",
  });
  const { customUserSession } = useContext(UserContext);
  useEffect(() => {
    if (status === "success" && customUserSession.status === "authenticated") {
      dispatch({
        type: "init",
        payload: {
          friends: customUserSession.data?.user?.friendWith!,
          searchResults: data,
          query: "",
        },
        friendId: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, customUserSession]);
  return [searchSpace, dispatch];
}
