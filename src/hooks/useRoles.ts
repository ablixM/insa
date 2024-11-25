import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
// import ms from "ms";
import roles from "../data/roles";
import Role from "../entities/role";

const apiClient = new APIClient<Role>("/roles");

export const useRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: apiClient.getAll,
    staleTime: 0,
    initialData: roles,
  });
};

export default useRoles;
