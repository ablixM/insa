import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import DashBoardSkeleton from "../components/DashBoardSkeleton";
const skeleton = [1, 2, 3, 4];
const DashBoardPage = () => {
  return (
    <Box padding={5}>
      <Box marginBottom={5}>
        <Heading>Dashboard</Heading>
      </Box>
      <SimpleGrid columns={2} spacing={10}>
        {skeleton.map((_, index) => (
          <DashBoardSkeleton key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DashBoardPage;
