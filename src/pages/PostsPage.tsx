import { Box, HStack } from "@chakra-ui/react";
import PostManagementToolBar from "../components/PostManagementToolBar";
import CatagorySelectorList from "../components/CatagorySelectorList";
import PostTableGrid from "../components/PostTableGrid";
import CatagorySelector from "../components/CatagorySelector";

const PostsPage = () => {
  return (
    <>
      <Box padding={5}>
        <PostManagementToolBar />
        <CatagorySelectorList />
        <HStack marginTop={"30px"} marginBottom={"30px"} spacing={6}>
          <CatagorySelector />
        </HStack>
        <PostTableGrid />
      </Box>
    </>
  );
};

export default PostsPage;
