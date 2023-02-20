import { Grid, GridItem, Spacer, Image } from "@chakra-ui/react";
import NavBar from "@/component/NavBar";
import SideBar from "@/component/SideBar";
import SearchBar from "@/component/SearchBar";
import Song from "@/component/Song";


export default function Dashboard() {
  return (
    <Grid
      templateRows="repeat(10, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={3}
      h="100%"
    >
      <GridItem
        rowSpan={10}
        colSpan={1}
        borderRadius={"8px"}
        bg={"#3B4252"}
        minHeight="1200px"
        maxHeight="1200px"
      >
        <SideBar />
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}/>
      <GridItem
        rowSpan={1}
        colSpan={1}
        // bg="#3B4252"
        // borderRadius={"8px"}
        alignItems="center"
        justifyContent="center"
        display="flex"
        maxHeight="70px"
      >
        {/* <SearchBar
          backgroundColor="#D8DEE9"
          placeHolder="Search for Songs"
          placeHolderColor="#2E3440"
        /> */}
        <Spacer />
        <NavBar />
      </GridItem>
      <GridItem
        rowSpan={10}
        colSpan={4}
        bg="#3B4252"
        borderRadius={"10px"}
        mr="10px"
        overflow={"auto"}
        maxHeight="1080px"
      >
        {[1, 2, 3, 4, 5].map((id) => {
          return <Song key={id} />;
        })}
      </GridItem>
    </Grid>
  );
}


