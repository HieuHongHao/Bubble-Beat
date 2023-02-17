import { Flex, Icon, HStack, Button, Text, useQuery } from "@chakra-ui/react";
import { useState } from "react";
import { HiMusicNote } from "react-icons/hi";
import { RiNumbersFill } from "react-icons/ri";
import { GiLoveSong } from "react-icons/gi";
import { FcMusic } from "react-icons/fc";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { MenuItem } from "@/types/menu";

const MenuItems: MenuItem[] = [
  { name: "Popular Songs", colorScheme: "purple" },
  { name: "Rooms", colorScheme: "cyan" },
  { name: "Song Stat", colorScheme: "teal" },
  { name: "Favourite Songs", colorScheme: "pink" },
];

function IconItem({ itemName }: { itemName: string }) {
  switch (itemName) {
    case "Popular Songs":
      return <HiMusicNote />;
    case "Rooms":
      return <BsFillDoorOpenFill />;
    case "Song Stat":
      return <RiNumbersFill />;
    default:
      return <GiLoveSong />;
  }
}

export default function SideBar() {
  const [active, setActive] = useState("Popular Songs");
  return (
    <Flex direction="column" gap={"5"} justifyContent="space-between">
      <HStack mt="20px" align="center" justify="flex-start">
        <Icon as={FcMusic} boxSize="10" />
        <Text
          bgGradient="linear(to-l, #5E81AC, #8FBCBB)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          Bubble Beat
        </Text>
      </HStack>
      {MenuItems.map((item) => {
        return (
          <Button
            display={"flex"}
            borderRadius={"8px"}
            flexDirection="row"
            mt="10px"
            height="50px"
            justifyContent="left"
            alignItems={"center"}
            gap={"10px"}
            ml="10px"
            mr="10px"
            onClick={() => {
              setActive(item.name);
            }}
            key={item.name}
            colorScheme={active === item.name ? item.colorScheme : "inherit"}
            leftIcon={<IconItem itemName={item.name} />}
          >
            {item.name}
          </Button>
        );
      })}
    </Flex>
  );
}
