import { UserContext } from "@/context/UserContext";
import { useReducer, useContext, Dispatch, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchSpace, SearchSpaceReducer, SearchAction } from "@/types/index";
import { fetchUsers } from "@/utility/friendAPI";



const reducer: SearchSpaceReducer = (
  state: SearchSpace,
  action: SearchAction
) => {
  switch (action.type) {
    case "init":
      const { friends,searchResults, query } = action.payload as SearchSpace;
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
  const session = useContext(UserContext);
  const { status, data } = useQuery({
    queryKey: ["usersWithFriends"],
    queryFn: fetchUsers,
  });
  const [searchSpace, dispatch] = useReducer(reducer, {
    friends: [],
    searchResults: [],
    query: "",
  });
  useEffect(() => {
    if (status === "success" && session?.status === "authenticated") {
      dispatch({
        type: "init",
        payload: {
          friends: session?.data?.user?.friendWith!,
          searchResults: data,
          query: "",
        },
      });
    }
  }, [status, session?.status, session?.data?.user?.friendWith, data]);
  return [searchSpace, dispatch];
}
