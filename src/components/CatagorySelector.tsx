import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePostQueryStore from "../store/usePostStore";
import useCatagories from "../hooks/useCatagories";
import useCatagory from "../hooks/useCatagory";

function CatagorySelector() {
  const selectedCatagoryName = usePostQueryStore((s) => s.postQuery.categories);

  const { data } = useCatagory();
  const selectedCatagory = useCatagories(selectedCatagoryName);
  const { setCatagoryName } = usePostQueryStore();
  return (
    <Menu>
      <MenuButton
        size={"sm"}
        as={Button}
        rightIcon={<BsChevronDown />}
        overflowY={"hidden"}
      >
        {selectedCatagory?.name || "catagory"}
      </MenuButton>
      <MenuList overflowY={"auto"}>
        {data?.results.map((catagory) => (
          <MenuItem
            onClick={() => setCatagoryName(catagory.name)}
            key={catagory.id}
          >
            {catagory.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default CatagorySelector;
