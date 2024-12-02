import {
  Checkbox,
  HStack,
  IconButton,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";

import usePost from "../hooks/usePost";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import useDeletePost from "../hooks/useDeletePost";

function PostTableGrid() {
  const { data } = usePost();
  const { mutate: deletePost } = useDeletePost(); // Destructure mutate from useDeletePost
  const toast = useToast();
  const [visibleRows, setVisibleRows] = useState<Record<string, boolean>>({});
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

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
      onError: (error: any) => {
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
  return (
    <TableContainer>
      <Table variant="striped" size={"sm"}>
        <Thead>
          <Tr>
            <Th>
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
          {data?.results.map((post) => (
            <Tr key={post.id}>
              <Td>
                <Checkbox
                  isChecked={selectedIds.includes(post.id)}
                  onChange={() => handleRowCheckbox(post.id)}
                  aria-label={`Select row ${post.id}`}
                ></Checkbox>
              </Td>

              <Td width="150px" isTruncated>
                {visibleRows[post.id] !== false ? (
                  post.title
                ) : (
                  <Skeleton height={"12px"} width={"100%"} />
                )}
              </Td>
              <Td width="150px" isTruncated>
                {visibleRows[post.id] !== false ? (
                  post.authorName
                ) : (
                  <Skeleton height={"12px"} width={"100%"} />
                )}
              </Td>
              <Td width="150px" isTruncated>
                {visibleRows[post.id] !== false ? (
                  post.categories
                ) : (
                  <Skeleton height={"12px"} width={"100%"} />
                )}
              </Td>
              <Td width="150px" isTruncated>
                {visibleRows[post.id] !== false ? (
                  post.createdAt
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
                  <IconButton aria-label="">
                    <MdEdit />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => handleDeletePost(post.id)}
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
  );
}

export default PostTableGrid;
