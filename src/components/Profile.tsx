import { Flex, Text } from "@chakra-ui/react";
import { useUsersStore } from "../store/useUsersStore";
import { FaUser } from "react-icons/fa";

function Profile() {
  const username = useUsersStore((state) => state.username);
  // const email = useUsersStore((state) => state.email);
  return (
    <Flex flexDirection={"row"} color={"green.100"} align={"center"}>
      <Flex paddingX={2} flexDirection={"column"}>
        <Text fontSize={"md"}>{username}</Text>
      </Flex>
      <FaUser />
    </Flex>
  );
}

export default Profile;
