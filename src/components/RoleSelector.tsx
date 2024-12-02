import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useRole from "../hooks/useRole";
import useRoles from "../hooks/useRoles";
import useUserQueryStore from "../store/useUserStore";

function RoleSelector() {
  const selectedRoleId = useUserQueryStore((s) => s.userQuery.role);
  const setSelectedRole = useUserQueryStore((s) => s.setRole);
  const { data } = useRoles();
  const selectedRole = useRole(selectedRoleId);
  return (
    <Menu>
      <MenuButton
        size={"sm"}
        as={Button}
        rightIcon={<BsChevronDown />}
        overflowY={"hidden"}
      >
        {selectedRole?.name || "Role"}
      </MenuButton>
      <MenuList overflowY={"auto"}>
        {data?.results.map((role) => (
          <MenuItem onClick={() => setSelectedRole(role.name)} key={role.id}>
            {role.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default RoleSelector;
