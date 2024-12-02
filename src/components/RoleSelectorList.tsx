import { Button, List, ListIcon, ListItem, Tag } from "@chakra-ui/react";
import useRoles from "../hooks/useRoles";
import useUserQueryStore from "../store/useUserStore";
import { PiLineVerticalBold } from "react-icons/pi";

function RoleSelectorList() {
  const selectedRole = useUserQueryStore((s) => s.userQuery.role);
  const { setRole } = useUserQueryStore();
  const { data } = useRoles();

  return (
    <>
      <List marginTop={6}>
        {data?.results.map((role) => (
          <ListItem
            size={"sm"}
            as={Button}
            key={role.id}
            onClick={() => setRole(role.name)}
            color={role.name === selectedRole ? "grey.800" : "blue.500"}
            cursor="pointer"
            variant={"link"}
            paddingX={4}
            marginBottom={2}
          >
            <ListIcon as={PiLineVerticalBold} color="gray.500" />
            {role.name}
            <Tag marginX={2}>{role.count}</Tag>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default RoleSelectorList;
