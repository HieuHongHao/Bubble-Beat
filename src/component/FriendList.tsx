import {
  Button,
  Popover,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  Stack,
  Text,
  Flex,
  Box,
  Avatar,
  Heading,
  Center,
  HStack,
} from "@chakra-ui/react";
import { IoPeople } from "react-icons/io5";
import SearchBar from "./SearchBar";

import useFriends from "@/hooks/useFriends";
import { ChangeEventHandler, Dispatch, useContext } from "react";
import { SearchAction, SearchSpace} from "@/types/search";
import {User} from "@/types/user"


function FriendProfile({
  profile,
  dispatch,
  isFriend,
}: {
  profile: User;
  dispatch: Dispatch<SearchAction>;
  isFriend: boolean;
}) {
  return (
    <Flex>
      <Avatar src={profile.image!} name={profile.name!}/>
      <Box ml="3" w="300px">
        <HStack>
          <Text fontWeight="bold">{profile.name}</Text>
          {isFriend ? (
            <Button size="xs" variant={"solid"}>
              Add
            </Button>
          ) : (
            <Button size="xs" variant={"solid"}>
              Remove
            </Button>
          )}
        </HStack>
        <Text fontSize="sm">Online</Text>
      </Box>
    </Flex>
  );
}
const handleAddFriends: ChangeEventHandler<HTMLInputElement> = (e) => {
  return;
};

export default function FriendList() {
  const [searchSpace, dispatch] = useFriends();
  return (
    <Popover>
      <PopoverTrigger>
        <Button leftIcon={<IoPeople />} colorScheme="pink" variant={"solid"}>
          Friends
        </Button>
      </PopoverTrigger>
      <PopoverContent
        borderRadius="8px"
        display="flex"
        flexDir="column"
        borderColor="pink.500"
        bg="pink.500"
        w="305px"
      >
        <PopoverHeader pt={4} fontWeight="bold" border="0" textAlign="center">
          <SearchBar
            backgroundColor="#D8DEE9"
            placeHolder="Search for friends"
            placeHolderColor="#2E3440"
          />
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Stack>
            {searchSpace.searchResults.map((result) => {
              return (
                <FriendProfile
                  profile={result}
                  dispatch={dispatch}
                  key={result.id}
                  isFriend={result.name! in searchSpace.friends}
                />
              );
            })}
          </Stack>
          <Center mt="10px">
            <Heading as="h3" size="md" textColor="#2E3440">
              Friends
            </Heading>
          </Center>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
