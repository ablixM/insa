import { Outlet, Navigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useAuth } from "../authContext"; // Assuming you have an Auth Context

const Layout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  return (
    <Box padding={0} alignContent={"center"} width={"100%"}>
      <Outlet />
    </Box>
  );
};

export default Layout;
