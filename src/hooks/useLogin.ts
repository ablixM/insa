import { useMutation } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { LoginCredentials, UserLog } from "../entities/userlog";

const apiClient = new APIClient<UserLog>("/login");

const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginCredentials) => apiClient.login(data),
    onSuccess: (response) => {
      console.log("Login successful:", response);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

export default useLogin;
