import { useQuery } from "@tanstack/react-query";

import { Post } from "../entities/post";

// import { APIClient } from "../services/api-client";
// import ms from "ms";
import usePostQueryStore from "../store/usePostStore";
import { APIClient } from "../services/api-client";
const apiClient = new APIClient<Post>("/posts");

const usePost = () => {
  const postQuery = usePostQueryStore((state) => state.postQuery);
  return useQuery({
    queryKey: ["posts", postQuery],
    queryFn: apiClient.getAll,
  });
};

export default usePost;
