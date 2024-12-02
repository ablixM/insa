import { useMutation } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import UserLog from "../entities/userlog";

const apiClient = new APIClient<UserLog>("/login");

const useLogin = () => {
  return useMutation({
    mutationFn: (data: UserLog) => apiClient.login(data), // Explicitly wrap the login call
    onSuccess: (response) => {
      console.log("Login successful:", response);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

export default useLogin;
