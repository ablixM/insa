import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Box padding={0} alignContent={"center"} width={"100%"}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
