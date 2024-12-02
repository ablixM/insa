import { useQuery } from "@tanstack/react-query";
import User from "../entities/user";
import useUserQueryStore from "../store/useUserStore";
import { APIClient, FetchResponse } from "../services/api-client";
// import ms from "ms";
const apiClient = new APIClient<User>("/users");

const useUsers = () => {
  const userQuery = useUserQueryStore((state) => state.userQuery);
  return useQuery<FetchResponse<User>, Error>({
    queryKey: ["users", userQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          role: userQuery?.role,
          search: userQuery?.searchText,
        },
      }),
  });
};

export default useUsers;
