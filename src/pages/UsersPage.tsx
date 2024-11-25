import { Box, HStack } from "@chakra-ui/react";
import UserManagementToolbar from "../components/UserManagementToolbar";
import RoleSelectorList from "../components/RoleSelectorList";
import RoleSelector from "../components/RoleSelector";
import BulkActionSelector from "../components/BulkActionSelector";
import UserTableGrid from "../components/UserTableGrid";

const UsersPage = () => {
  return (
    <>
      <Box padding={5}>
        <UserManagementToolbar />
        <RoleSelectorList />
        <HStack marginTop={"30px"} marginBottom={"30px"} spacing={6}>
          <BulkActionSelector />
          <RoleSelector />
        </HStack>
        <UserTableGrid />
      </Box>
    </>
  );
};

export default UsersPage;
