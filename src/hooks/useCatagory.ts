import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

import { Catagory } from "../entities/catagory";

const apiClient = new APIClient<Catagory>("/categories");
const useCatagory = () => {
  return useQuery({
    queryKey: ["catagory"],
    queryFn: apiClient.getAll,
  });
};

export default useCatagory;
