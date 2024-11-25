import { useQuery } from "@tanstack/react-query";

import { Post } from "../entities/post";

import { APIClient } from "../services/api-client";
import ms from "ms";

import postData from "../data/post";
import usePostQueryStore from "../store/usePostStore";
const apiClient = new APIClient<Post>("/users");

const usePost = () => {
  const postQuery = usePostQueryStore((state) => state.postQuery);
  return useQuery({
    queryKey: ["posts", postQuery],
    queryFn: () => {
      return {
        results: postData.results.filter((post) => {
          const matchesRole = postQuery.catagoryId
            ? post.id === postQuery.catagoryId
            : true;
          const matchesSearch = postQuery.searchText
            ? `${post.title}`
                .toLowerCase()
                .includes(postQuery.searchText.toLowerCase())
            : true;
          return matchesRole && matchesSearch;
        }),
      };
    },
    staleTime: 0,
    initialData: postData,
  });
};

export default usePost;
