import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import ms from "ms";
import { Catagory } from "../entities/catagory";

const apiClient = new APIClient<Catagory>("/categories");
const useCatagory = () => {
  return useQuery({
    queryKey: ["catagory"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useCatagory;
