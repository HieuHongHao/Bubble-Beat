import { Flex, Spacer, Button, Avatar } from "@chakra-ui/react";
import {IoLogOut} from "react-icons/io5"
import { signOut } from "next-auth/react";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import Notification from "./Notification";
import FriendList from "./FriendList";
import { URL } from "@/url";

export default function NavBar() {
  const {customUserSession} = useContext(UserContext);
  return (
    <Flex
      minWidth={"max-content"}
      ml={"100px"}
      direction={"row"}
      alignItems={"center"}
      gap={"7"}
      height={"50px"}
      pl="-2"
    >
      <Notification/>
      <FriendList/>
      <Spacer />
      <Avatar name={customUserSession.data?.user?.name!} src={customUserSession.data?.user?.image!} mr="10px"/>
      <Button
        onClick={() => signOut({ callbackUrl: URL }) }
        variant="solid"
        colorScheme="linkedin"
        mr="10px"
        leftIcon={<IoLogOut/>}
      >
        Sign out
      </Button>
    </Flex>
  );
}
