import { Tr, Td, Checkbox } from "@chakra-ui/react";

import { Post } from "../entities/post";

interface Props {
  data: Post;
}

function PostTableRow({ data }: Props) {
  return (
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
  );
}

export default PostTableRow;
