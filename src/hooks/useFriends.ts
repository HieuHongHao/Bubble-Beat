import { UserContext } from "@/context/UserContext";
import { useReducer, useContext, Dispatch, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  SearchSpace,
  SearchSpaceReducer,
  SearchAction,
  Init,
  AddFriend,
} from "@/types/search";
import { fetchUsers } from "@/utility/friendAPI";

const reducer: SearchSpaceReducer = (
  state: SearchSpace,
  action: SearchAction
) => {
  switch (action.type) {
    case "init":
      let { payload } = action as Init;
      return {
        friends: (payload as SearchSpace).friends,
        searchResults: (payload as SearchSpace).searchResults,
        query: (payload as SearchSpace).query,
      };
    case "addFriend":
      let { friendId } = action as AddFriend;
      let friend = state.searchResults.filter((user) => user.id === friendId);
      let nonFriends = state.searchResults.filter(
        (user) => user.id !== friendId
      );
      return {
        friends: state.friends.concat(friend),
        searchResults: nonFriends,
        query: state.query,
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
  const { customUserSession} = useContext(UserContext);
  useEffect(() => {
    if (status === "success" && customUserSession.status === "authenticated") {
      dispatch({
        type: "init",
        payload: {
          friends: customUserSession.data?.user?.friendWith!,
          searchResults: data,
          query: "",
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, customUserSession]);
  return [searchSpace, dispatch];
}
  