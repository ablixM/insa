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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Progress,
} from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";
import usePostQueryStore from "../store/usePostStore";
import useCatagory from "../hooks/useCatagory";
import { BsChevronDown } from "react-icons/bs";
import useCatagories from "../hooks/useCatagories";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

function NewPostForm() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const selectedCatagoryName = usePostQueryStore((s) => s.postQuery.categories);
  const { data } = useCatagory();
  const selectedCatagory = useCatagories(selectedCatagoryName);
  const { setCatagoryName } = usePostQueryStore();
  const toast = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFiles) {
      toast({
        title: "Error",
        description: "Please select files first.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]);
    }
    formData.append("title", name);
    const cleanContent = DOMPurify.sanitize(age, { ALLOWED_TAGS: [] });
    formData.append("description", cleanContent);
    if (selectedCatagoryName) {
      formData.append("categories", selectedCatagoryName.toString());
    } else {
      toast({
        title: "Error",
        description: "Please select a category.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      await axios.post("http://localhost:5400/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress =
            (progressEvent.loaded / (progressEvent.total || 1)) * 100;
          setUploadProgress(Math.round(progress));
        },
      });

      toast({
        title: "Success",
        description: "Post added successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Reset form
      setName("");
      setAge("");
      setSelectedFiles(null);
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to upload post",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Helper function to get file names
  const getSelectedFileNames = () => {
    if (!selectedFiles) return "";
    return Array.from(selectedFiles)
      .map((file) => file.name)
      .join(", ");
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
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
              <Flex alignItems="center" gap={4}>
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
                <Box color="gray.600">
                  {selectedFiles ? (
                    <Text
                      color="green.500"
                      fontWeight="bold"
                      isTruncated
                      maxW="300px"
                    >
                      {getSelectedFileNames()}
                    </Text>
                  ) : (
                    <Text color="gray.400">No files selected</Text>
                  )}
                </Box>
              </Flex>
            </FormControl>
          </Box>

          <FormControl>
            <ReactQuill
              theme="snow"
              value={age}
              onChange={setAge}
              modules={modules}
              style={{
                height: "200px",
                marginBottom: "50px",
              }}
            />
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
                <Button
                  onClick={handleUpload}
                  size={"sm"}
                  isLoading={isUploading}
                  loadingText="Publishing..."
                >
                  Publish
                </Button>
              </HStack>
            </VStack>
          </Box>
        </GridItem>
      </Grid>

      {isUploading && (
        <Box position="fixed" top="0" left="0" right="0" zIndex="toast">
          <Progress
            value={uploadProgress}
            size="xs"
            colorScheme="blue"
            isAnimated
            hasStripe
          />
        </Box>
      )}
    </form>
  );
}

export default NewPostForm;
