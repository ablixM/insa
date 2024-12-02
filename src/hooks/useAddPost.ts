import { useMutation, useQueryClient } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

const apiClient = new APIClient<FormData>("/posts");

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => apiClient.create(data), // Ensure the argument is FormData
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.error("Error adding post:", error);
    },
  });
};

export default useAddPost;
