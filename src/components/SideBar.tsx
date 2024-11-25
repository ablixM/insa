import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import insaLogo from "../assets/insaLogo.svg";
import { navItems } from "../data/sideBarItems.ts";
import useNavStore from "../store/useNavStore.ts";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { setActivePage, activePage } = useNavStore();
  const navigate = useNavigate();
  return (
    <Box
      width={"300px"}
      height={"100vh"}
      bg={"#1D2327"}
      position={"fixed"}
      left={0}
      top={0}
      bottom={0}
    >
      <Flex
        marginTop={"50px"}
        marginBottom={"20px"}
        width={"100%"}
        align={"center"}
        justify={"center"}
        paddingX={12}
      >
        <Image src={insaLogo}></Image>
      </Flex>
      <List spacing={1}>
        {navItems.map((item) => (
          <ListItem
            {...(activePage === item.page && { bg: "blue.900" })}
            onClick={() => {
              setActivePage(item.page);
              navigate(item.page);
            }}
            key={item.id}
            padding="5px"
            _hover={{
              backgroundColor: "blue.900",
              cursor: "pointer",
            }}
            transition="all 0.3s"
          >
            <HStack paddingX={5}>
              <IconButton
                _hover={{
                  backgroundColor: "trasparent",
                  cursor: "pointer",
                }}
                bg={"transparent"}
                icon={<item.filledIcon />}
                aria-label={item.label}
                color={"gray.100"}
                fontSize={"20px"}
              />
              <Button
                _hover={{
                  backgroundColor: "trasparent",
                  cursor: "pointer",
                }}
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                fontWeight={"sm"}
                variant="ghost"
                color={"gray.100"}
              >
                {item.label}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
