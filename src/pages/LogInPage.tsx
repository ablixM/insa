import LogInForm from "../components/LogInForm.tsx";
import { Box, Flex } from "@chakra-ui/react";

const LogInPage = () => {
  return (
    <Box as={Flex} height={"100vh"} align={"center"} justify={"center"}>
      <LogInForm />
    </Box>
  );
};

export default LogInPage;
