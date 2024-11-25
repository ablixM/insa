import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useUserQueryStore from "../store/useUserStore";
import useRoles from "../hooks/useRoles";
import useRole from "../hooks/useRole";

function NewUserForm() {
  const selectedRoleId = useUserQueryStore((s) => s.userQuery.roleId);
  const setSelectedRoleId = useUserQueryStore((s) => s.setRoleId);
  const { data } = useRoles();
  const selectedRole = useRole(selectedRoleId);
  return (
    <>
      <VStack
        flexDirection={"column"}
        align={"center"}
        justify={"center"}
        maxW={"50%"}
        spacing={4}
      >
        <FormControl>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              User name (Required)
            </FormLabel>
            <Input />
          </Box>
        </FormControl>
        <FormControl>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              E-mail
            </FormLabel>
            <Input type="email" />
          </Box>
        </FormControl>
        <FormControl>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              First Name
            </FormLabel>
            <Input />
          </Box>
        </FormControl>
        <FormControl>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              Last Name
            </FormLabel>
            <Input />
          </Box>
        </FormControl>
        <FormControl>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              Password
            </FormLabel>
            <Input type="password" />
          </Box>
        </FormControl>
        <FormControl>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              Confirm Password
            </FormLabel>
            <Input type="password" />
          </Box>
        </FormControl>

        <FormControl>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"200px"} margin={0}>
              Role
            </FormLabel>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                overflowY={"hidden"}
              >
                {selectedRole?.name || "Role"}
              </MenuButton>
              <MenuList overflowY={"auto"}>
                {data?.results.map((role) => (
                  <MenuItem
                    onClick={() => setSelectedRoleId(role.id)}
                    key={role.id}
                  >
                    {role.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </FormControl>
      </VStack>
      <Box marginY={12}>
        <Button bg={"green.400"} width={"200px"}>
          Add User
        </Button>
      </Box>
    </>
  );
}

export default NewUserForm;
