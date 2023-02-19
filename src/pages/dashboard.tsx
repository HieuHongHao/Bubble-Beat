import { Grid, GridItem, Spacer } from "@chakra-ui/react";
import NavBar from "@/component/NavBar";
import SideBar from "@/component/SideBar";
import SearchBar from "@/component/SearchBar";
import Song from "@/component/Song";

export default function Dashboard() {
  return (
    <Grid
      templateRows="repeat(10, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={10}
      h="100%"
    >
      <GridItem
        rowSpan={10}
        colSpan={1}
        borderRadius={"8px"}
        bg={"#3B4252"}
        mt="115px"
        ml="15px"
        minHeight="1000px"
        maxHeight="1000px"
      >
        <SideBar />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={4}
        bg="#3B4252"
        borderRadius={"8px"}
        alignItems="center"
        justifyContent="center"
        display="flex"
        maxHeight="70px"
      >
        <SearchBar
          backgroundColor="#D8DEE9"
          placeHolder="Search for Songs"
          placeHolderColor="#2E3440"
        />
        <Spacer />
        <NavBar />
      </GridItem>
      <GridItem
        rowSpan={10}
        colSpan={4}
        bg="#3B4252"
        borderRadius={"8px"}
        mt="1px"
        mr="30px"
        overflow={"auto"}
        maxHeight="1000px"
      >
        {[1, 2, 3, 4, 5].map((id) => {
          return <Song key={id} />;
        })}
      </GridItem>
    </Grid>
  );
}


