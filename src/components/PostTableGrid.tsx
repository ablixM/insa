import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import usePost from "../hooks/usePost";
import PostTableRow from "./PostTableRow";

function PostTableGrid() {
  const { data } = usePost();
  return (
    <TableContainer>
      <Table variant="striped" size={"sm"}>
        <Thead>
          <Tr>
            <Th>
              <Checkbox></Checkbox>
            </Th>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Catagories</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.results.map((data) => (
            <Tr key={data.id}>
              <Td>
                <Checkbox></Checkbox>
              </Td>
              <Td>{data.title}</Td>
              <Td>{data.authorName}</Td>
              <Td>{data.catagory.map((s) => s.name)}</Td>
              <Td>{data.createdAt}</Td>
              <Td>Action</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default PostTableGrid;
