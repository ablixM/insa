import {
  HStack,
  Stack,
  Heading,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import usePostQueryStore from "../store/usePostStore";

function PostManagementToolBar() {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setSearchText } = usePostQueryStore();
  return (
    <>
      <HStack justify={"space-between"} marginTop={5}>
        // add Users
        <Stack flexDirection={"row"} align={"center"} justify={"center"}>
          <Heading size={"md"} fontWeight={"500"}>
            Posts
          </Heading>
          <Button
            size={"sm"}
            colorScheme={"blue"}
            variant={"outline"}
            borderRadius={"md"}
            onClick={() => navigate("AddPost")}
          >
            Add New Post
          </Button>
        </Stack>
        // search Users
        <Stack flexDirection={"row"} align={"center"} justify={"center"}>
          <InputGroup>
            <InputLeftElement children={<BsSearch fontSize={10} />} />
            <Input
              size={"sm"}
              ref={ref}
              borderRadius={20}
              placeholder="Search posts..."
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
            Search Posts
          </Button>
        </Stack>
      </HStack>
    </>
  );
}

export default PostManagementToolBar;
