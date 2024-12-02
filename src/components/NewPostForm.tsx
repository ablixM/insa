import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Grid,
  GridItem,
  HStack,
  Input,
  VStack,
  Text,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";
import usePostQueryStore from "../store/usePostStore";
import useCatagory from "../hooks/useCatagory";
import { BsChevronDown } from "react-icons/bs";
import useCatagories from "../hooks/useCatagories";

function NewPostForm() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const selectedCatagoryName = usePostQueryStore(
    (s) => s.postQuery.catagoryName
  );
  const { data } = useCatagory();
  const selectedCatagory = useCatagories(selectedCatagoryName);
  const { setCatagoryName } = usePostQueryStore();
  const toast = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAge(event.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFiles) {
      setUploadStatus("Please select files first.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]);
    }
    formData.append("title", name);
    formData.append("description", age);
    if (selectedCatagoryName) {
      formData.append("categories", selectedCatagoryName.toString());
    } else {
      setUploadStatus("Please select a category.");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.100.147:5400/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus(response.data.message);
      toast({
        title: "Success",
        description: "Post added successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      setUploadStatus("Error uploading files.");
      console.error("Error uploading files:", error);
    }
  };

  return (
    <form>
      <Grid
        templateAreas={{
          base: ` "main"`,
          lg: ` "main aside "`,
        }}
        templateColumns={{
          base: "1fr",
          lg: " 1fr 250px",
        }}
      >
        <GridItem area="main">
          <Box>
            <FormControl>
              <Box as={Flex} flexDirection={"row"} align={"center"}>
                <Input
                  placeholder="Enter title here"
                  type="text"
                  value={name}
                  onChange={handleTitleChange}
                />
              </Box>
              <Box color="red.500"></Box>
            </FormControl>
          </Box>
          <Box marginY={4}>
            <FormControl>
              <Flex alignItems="center">
                <Button as="label" bg="blue.400" color="white" cursor="pointer">
                  Add Media
                  <Input
                    type="file"
                    hidden
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                  />
                </Button>
                <Box marginLeft={4} color="gray.600">
                  <Text color="green.500" fontWeight="bold">
                    file
                  </Text>
                </Box>
              </Flex>
            </FormControl>
          </Box>

          <FormControl>
            <Textarea
              placeholder="Description"
              value={age}
              onChange={handleDescriptionChange}
            />
            <Box color="red.500"></Box>
          </FormControl>
          <Box marginY={4}>
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
          </Box>
        </GridItem>
        <GridItem area="aside" paddingX={5}>
          <Box>
            <VStack align={"start"}>
              <h1>Publish</h1>
              <Divider />
              <HStack justify={"space-between"} width={"100%"}>
                <Button size={"sm"}>Save Draft</Button>
                <Button size={"sm"}>Preview</Button>
              </HStack>
              <HStack align={"start"} justify={"start"}>
                <Text fontSize={"sm"}>Status:</Text>
                <Text fontSize={"sm"}>Draft:</Text>
              </HStack>
              <HStack align={"start"} justify={"start"}>
                <Text fontSize={"sm"}>Status:</Text>
                <Text fontSize={"sm"}>Pulic</Text>
              </HStack>
              <HStack align={"start"} justify={"start"}>
                <Text fontSize={"sm"}>Status</Text>
                <Text fontSize={"sm"}>Immediatly</Text>
              </HStack>
              <Divider />
              <HStack justify={"space-between"} width={"100%"}>
                <Button size={"sm"} variant={"link"}>
                  move to trash
                </Button>
                <Button onClick={handleUpload} size={"sm"}>
                  Publish
                </Button>
              </HStack>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </form>
  );
}

export default NewPostForm;
