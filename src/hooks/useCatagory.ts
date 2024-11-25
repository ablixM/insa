import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import ms from "ms";
import catagory from "../data/catagory";
import { Catagory } from "../entities/catagory";

const apiClient = new APIClient<Catagory>("/catagory");
const useCatagory = () => {
  return useQuery({
    queryKey: ["catagory"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: catagory,
  });
};

export default useCatagory;
