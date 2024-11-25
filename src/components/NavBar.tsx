import { Box, HStack } from "@chakra-ui/react";
import Profile from "./Profile";

function NavBar() {
  return (
    <HStack bg={"#1D2327"} height={"60px"} align={"center"}>
      <Box position={"absolute"} right={8}>
        <Profile />
      </Box>
    </HStack>
  );
}

export default NavBar;
