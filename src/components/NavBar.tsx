import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";

function NavBar() {
  return (
    <VStack bg={"#1D2327"} height={"60px"} align={"center"} justify={"center"}>
      <Box
        position={"absolute"}
        right={8}
        as={Flex}
        flexDirection={"row"}
        align={"center"}
      >
        <Profile />
        <LogoutButton />
      </Box>
    </VStack>
  );
}

export default NavBar;
