import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function BulkActionSelector() {
  return (
    <Menu>
      <MenuButton
        size={"sm"}
        as={Button}
        rightIcon={<BsChevronDown />}
        overflowY={"hidden"}
      >
        Bulk Actions
      </MenuButton>
      <MenuList overflowY={"auto"}>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Set password reset</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default BulkActionSelector;
