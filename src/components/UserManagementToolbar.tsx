import {
  HStack,
  Stack,
  Heading,
  Button,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useUserQueryStore from "../store/useUserStore";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

function UserManagementToolbar() {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setSearchText } = useUserQueryStore();
  return (
    <HStack justify={"space-between"} marginTop={5}>
      // add Users
      <Stack flexDirection={"row"} align={"center"} justify={"center"}>
        <Heading size={"md"} fontWeight={"500"}>
          Users
        </Heading>
        <Button
          size={"sm"}
          colorScheme={"blue"}
          variant={"outline"}
          borderRadius={"md"}
          onClick={() => navigate("AddUser")}
        >
          Add User
        </Button>
      </Stack>
      // search Users
      <Stack flexDirection={"row"} align={"center"} justify={"center"}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            size={"sm"}
            ref={ref}
            borderRadius={20}
            placeholder="Search usres..."
            variant="filled"
          />
        </InputGroup>

        <Button
          onClick={(event) => {
            event.preventDefault();
            if (ref.current) {
              setSearchText(ref.current.value);
            }
          }}
          size={"sm"}
          type="submit"
          colorScheme={"blue"}
          variant={"outline"}
          borderRadius={"md"}
          paddingX={8}
        >
          Search Users
        </Button>
      </Stack>
    </HStack>
  );
}

export default UserManagementToolbar;
