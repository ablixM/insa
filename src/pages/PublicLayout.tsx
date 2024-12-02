import { Outlet } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";

const PublicLayout = () => {
  return (
    <Box
      bg="gray.50"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="sm">
        {/* Renders child routes like login */}
        <Outlet />
      </Container>
    </Box>
  );
};

export default PublicLayout;
