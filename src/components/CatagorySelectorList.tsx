import { Button, List, ListIcon, ListItem, Tag } from "@chakra-ui/react";
import { PiLineVerticalBold } from "react-icons/pi";
import usePostQueryStore from "../store/usePostStore";
import useCatagory from "../hooks/useCatagory";

function CatagorySelectorList() {
  const seletedCatagoryId = usePostQueryStore((s) => s.postQuery.catagoryId);
  const setSeletedCatagoryId = usePostQueryStore((s) => s.setCatagoryId);
  const { data } = useCatagory();

  return (
    <>
      <List marginTop={6}>
        {data.results.map((catagory) => (
          <ListItem
            size={"sm"}
            as={Button}
            key={catagory.id}
            onClick={() => setSeletedCatagoryId(catagory.id)}
            color={catagory.id === seletedCatagoryId ? "grey.800" : "blue.500"}
            cursor="pointer"
            variant={"link"}
            paddingX={4}
            marginBottom={2}
          >
            <ListIcon as={PiLineVerticalBold} color="gray.500" />
            {catagory.name}
            <Tag marginX={2}>{catagory.count}</Tag>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CatagorySelectorList;
