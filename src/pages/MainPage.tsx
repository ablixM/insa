import { Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "../components/SideBar.tsx";

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.tsx";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Grid
        templateAreas={{
          base: ` "main"`,
          lg: ` "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" borderColor={"blue.400"}>
            <SideBar />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default MainPage;
