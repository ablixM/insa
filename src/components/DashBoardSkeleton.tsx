import { Skeleton, Stack } from "@chakra-ui/react";

function DashBoardSkeleton() {
  return (
    <div>
      <Stack>
        <Skeleton>
          <div>contents wrapped</div>
          <div>won't be visible</div>
        </Skeleton>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </div>
  );
}

export default DashBoardSkeleton;
