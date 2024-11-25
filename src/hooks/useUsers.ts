import { useQuery } from "@tanstack/react-query";
import user from "../data/user";
import User from "../entities/user";
import useUserQueryStore from "../store/useUserStore";
import { FetchResponse } from "../services/api-client";
// import ms from "ms";
// const apiClient = new APIClient<User>("/users");

const useUsers = () => {
  const userQuery = useUserQueryStore((state) => state.userQuery);
  return useQuery<FetchResponse<User>, Error>({
    queryKey: ["users", userQuery],
    queryFn: () => {
      return {
        results: user.results.filter((user) => {
          const matchesRole = userQuery.roleId
            ? user.roleId === userQuery.roleId
            : true;
          const matchesSearch = userQuery.searchText
            ? `${user.name} ${user.username}`
                .toLowerCase()
                .includes(userQuery.searchText.toLowerCase())
            : true;
          return matchesRole && matchesSearch;
        }),
      };
    },
    staleTime: 0,
    initialData: user,
  });
};

export default useUsers;
