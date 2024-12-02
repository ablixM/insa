import { useMutation, useQueryClient } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import User from "../entities/user";

const apiClient = new APIClient<User>("/users");

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiClient.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    },
  });
};

export default useAddUser;
