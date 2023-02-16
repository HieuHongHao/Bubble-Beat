import { UserContext } from "@/context/UserContext";
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
  Card,
  CardHeader,
  Avatar,
  CardBody,
  Text,
  Heading,
} from "@chakra-ui/react";

import { useContext } from "react";
import { IoNotificationsSharp } from "react-icons/io5";

function EventCard({ name }: { name: string }) {
  return (
    <Card
      borderRadius="5px"
      direction={{ base: "column", sm: "row" }}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
    >
      <CardHeader>
        <Avatar name={name} bg="purple" textColor="#D8DEE9"></Avatar>
      </CardHeader>
      <CardBody>
        <Text
          fontWeight="semibold"
          textColor="#D8DEE9"
          textAlign={"left"}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </Text>
      </CardBody>
    </Card>
  );
}

export default function Notification() {
  const session = useContext(UserContext);
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          leftIcon={<IoNotificationsSharp />}
          colorScheme="purple"
          variant={"solid"}
        >
          Notification
          </Button>
      </PopoverTrigger>
      <PopoverContent
        borderRadius="8px"
        display="flex"
        flexDir="column"
        borderColor="purple.500"
        bg="purple.500"
        w="450px"
      >
        <PopoverHeader pt={4} fontWeight="bold" border="0" textAlign="center">
          <Heading as="h3" size="md" textColor="#D8DEE9">
            Events
          </Heading>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Stack>
            {["Hieu", "Abe", "Thing"].map((name, idx) => {
              return <EventCard name={name} key={name}></EventCard>;
            })}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
