import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Checkbox,
  HStack,
  IconButton,
  Input,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import usePost from "../hooks/usePost";
import { BiHide, BiShow } from "react-icons/bi";
import { useState, useRef } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import useDeletePost from "../hooks/useDeletePost";
import { Post } from "../entities/post";
import useUpdatePost from "../hooks/useUpdatePost";

function PostTableGrid() {
  const { data, isLoading } = usePost();
  const { mutate: deletePost } = useDeletePost();
  const toast = useToast();
  const [visibleRows, setVisibleRows] = useState<Record<string, boolean>>({});
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedValues, setEditedValues] = useState<{
    id?: string;
    title?: string;
    authorName?: string;
    categories?: string;
  }>({});
  const { mutate: updatePost } = useUpdatePost();

  const handleRowCheckbox = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (isAllChecked) {
      setSelectedIds([]);
    } else {
      const allIds = data?.results.map((post) => post.id) || [];
      setSelectedIds(allIds);
    }
    setIsAllChecked(!isAllChecked);
  };

  const toggleVisibility = (id: string) => {
    setVisibleRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleDeletePost = (postId: string) => {
    deletePost(postId, {
      onSuccess: () => {
        toast({
          title: "Post deleted",
          description: "The post was successfully deleted.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      },
      onError: (error: Error) => {
        toast({
          title: "Error deleting post",
          description:
            error.message || "An error occurred while deleting the post.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  };

  const handleDeleteClick = (postId: string) => {
    setPostToDelete(postId);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (postToDelete) {
      handleDeletePost(postToDelete);
      setIsDeleteDialogOpen(false);
      setPostToDelete(null);
    }
  };

  const handleEditClick = (post: Post) => {
    setEditedValues({
      id: post.id,
      title: post.title,
      authorName: post.authorName,
      categories: post.categories,
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (!editedValues.id) return;
    const { id, ...rest } = editedValues;
    updatePost(
      { id, ...rest },
      {
        onSuccess: () => {
          toast({
            title: "Post updated",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setIsEditModalOpen(false);
          setEditedValues({});
        },
        onError: (error) => {
          toast({
            title: "Error updating post",
            description: error.message || "Failed to update post",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        },
      }
    );
  };

  return (
    <>
      <TableContainer>
        <Table variant="striped" size={"sm"}>
          <Thead>
            <Tr>
              <Th width={"10px"}>
                <Checkbox
                  isChecked={isAllChecked}
                  onChange={handleSelectAll}
                  aria-label="Select all rows"
                ></Checkbox>
              </Th>
              <Th>Title</Th>
              <Th>Author</Th>
              <Th>Catagories</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading
              ? [...Array(5)].map((_, index) => (
                  <Tr key={index}>
                    <Td>
                      <Skeleton height="20px" width="20px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" width="150px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" width="150px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" width="150px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" width="150px" />
                    </Td>
                    <Td>
                      <HStack>
                        <Skeleton height="32px" width="32px" />
                        <Skeleton height="32px" width="32px" />
                        <Skeleton height="32px" width="32px" />
                      </HStack>
                    </Td>
                  </Tr>
                ))
              : data?.results.map((post) => (
                  <Tr key={post.id}>
                    <Td maxWidth={"10px"}>
                      <Checkbox
                        isChecked={selectedIds.includes(post.id)}
                        onChange={() => handleRowCheckbox(post.id)}
                        aria-label={`Select row ${post.id}`}
                      ></Checkbox>
                    </Td>

                    <Td width="150px" isTruncated>
                      {isEditModalOpen && editedValues.id === post.id ? (
                        <Input
                          size="sm"
                          value={editedValues.title}
                          onChange={(e) =>
                            setEditedValues({
                              ...editedValues,
                              title: e.target.value,
                            })
                          }
                        />
                      ) : visibleRows[post.id] !== false ? (
                        post.title
                      ) : (
                        <Skeleton height="12px" width="100%" />
                      )}
                    </Td>
                    <Td width="150px" isTruncated>
                      {isEditModalOpen && editedValues.id === post.id ? (
                        <Input
                          size="sm"
                          value={editedValues.authorName}
                          onChange={(e) =>
                            setEditedValues({
                              ...editedValues,
                              authorName: e.target.value,
                            })
                          }
                        />
                      ) : visibleRows[post.id] !== false ? (
                        post.authorName
                      ) : (
                        <Skeleton height="12px" width="100%" />
                      )}
                    </Td>
                    <Td width="150px" isTruncated>
                      {isEditModalOpen && editedValues.id === post.id ? (
                        <Input
                          size="sm"
                          value={editedValues.categories}
                          onChange={(e) =>
                            setEditedValues({
                              ...editedValues,
                              categories: e.target.value,
                            })
                          }
                        />
                      ) : visibleRows[post.id] !== false ? (
                        post.categories
                      ) : (
                        <Skeleton height="12px" width="100%" />
                      )}
                    </Td>
                    <Td width="150px" isTruncated>
                      {visibleRows[post.id] !== false ? (
                        new Date(post.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      ) : (
                        <Skeleton height={"12px"} width={"100%"} />
                      )}
                    </Td>
                    <Td width="150px" isTruncated>
                      <HStack>
                        <IconButton
                          aria-label={visibleRows[post.id] ? "Hide" : "Reveal"}
                          onClick={() => toggleVisibility(post.id)}
                        >
                          {visibleRows[post.id] ? (
                            <BiHide fontSize={"20px"} />
                          ) : (
                            <BiShow fontSize={"20px"} />
                          )}
                        </IconButton>
                        <IconButton
                          aria-label="Edit"
                          onClick={() => handleEditClick(post)}
                        >
                          <MdEdit />
                        </IconButton>
                        <IconButton
                          aria-label="Delete"
                          onClick={() => handleDeleteClick(post.id)}
                        >
                          <MdDelete />
                        </IconButton>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
          </Tbody>
        </Table>
      </TableContainer>

      <AlertDialog
        isOpen={isDeleteDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsDeleteDialogOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this post? This action cannot be
              undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteConfirm} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={editedValues.title}
                onChange={(e) =>
                  setEditedValues({ ...editedValues, title: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Author</FormLabel>
              <Input
                value={editedValues.authorName}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    authorName: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Categories</FormLabel>
              <Input
                value={editedValues.categories}
                onChange={(e) =>
                  setEditedValues({
                    ...editedValues,
                    categories: e.target.value,
                  })
                }
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSaveEdit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PostTableGrid;
