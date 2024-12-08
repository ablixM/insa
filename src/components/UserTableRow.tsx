import { Tr, Td, Checkbox } from "@chakra-ui/react";

import User from "../entities/user";

interface Props {
  data: User;
}

function UserTableRow({ data }: Props) {
  return (
    <Tr key={data.id}>
      <Td>
        <Checkbox></Checkbox>
      </Td>
      <Td>{data.username}</Td>
      <Td>{data.name}</Td>
      <Td>{data.email}</Td>
      <Td>{data.role}</Td>
    </Tr>
  );
}

export default UserTableRow;
