import { useMutation, useQueryClient } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Post } from "../entities/post";

const apiClient = new APIClient<Post>("/posts");

interface UpdatePostData {
  title?: string;
  authorName?: string;
  categories?: string;
}

const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...data }: { id: string } & UpdatePostData) =>
      apiClient.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export default useUpdatePost;
