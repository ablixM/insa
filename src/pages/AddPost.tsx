import { Box, CloseButton, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import NewPostForm from "../components/NewPostForm";

function AddPost() {
  const navigate = useNavigate();
  return (
    <Box padding={5}>
      <SimpleGrid column={1}>
        <Stack
          maxWidth={"400px"}
          flexDirection={"row"}
          align={"center"}
          marginY={5}
        >
          <CloseButton onClick={() => navigate(-1)} />
          <Heading size={"lg"}>Add New Post</Heading>
        </Stack>
        <NewPostForm />
      </SimpleGrid>
    </Box>
  );
}

export default AddPost;
