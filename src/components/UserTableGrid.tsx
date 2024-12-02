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
// import useUser from "../hooks/useUsers";
// import UserTableRow from "./UserTableRow";
import useUsers from "../hooks/useUsers";

function UserTableGrid() {
  const { data } = useUsers();
  return (
    <TableContainer>
      <Table variant="striped" size={"sm"}>
        <Thead>
          <Tr>
            <Th>
              <Checkbox></Checkbox>
            </Th>
            <Th>User Name</Th>
            <Th>Name</Th>
            <Th>E-mail</Th>
            <Th>Role</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.results.map((data) => (
            <Tr key={data.id}>
              <Td>
                <Checkbox></Checkbox>
              </Td>
              <Td>{data.username}</Td>
              <Td>{data.firstName + " " + data.lastName}</Td>
              <Td>{data.email}</Td>
              <Td>{data.role}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default UserTableGrid;
