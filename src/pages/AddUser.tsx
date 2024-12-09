import { Box, Button, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import NewUserForm from "../components/NewUserForm";
import { BsArrowLeft } from "react-icons/bs";

function AddUser() {
  const navigate = useNavigate();
  return (
    <Box padding={5}>
      <SimpleGrid column={1}>
        <Stack
          maxWidth={"400px"}
          flexDirection={"row"}
          align={"center"}
          marginY={5}
          spacing={4}
        >
          <Button
            leftIcon={<BsArrowLeft />}
            variant="ghost"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Heading size={"lg"}>Add New User</Heading>
        </Stack>
        <NewUserForm />
      </SimpleGrid>
    </Box>
  );
}

export default AddUser;
