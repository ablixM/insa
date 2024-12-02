import { useMutation, useQueryClient } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

const apiClient = new APIClient<FormData>("/posts");

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) => apiClient.delete(id), // Use the delete method from APIClient
    onSuccess: () => {
      // Invalidate the "posts" query to refetch the posts after deletion
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.error("Error deleting post:", error);
    },
  });
};

export default useDeletePost;
