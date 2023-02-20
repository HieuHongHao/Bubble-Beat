/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Badge,
  Button,
  Stack,
  Image,
  HStack,
  Flex,
} from "@chakra-ui/react";

export default function Song() {
  return (
    <Card
      bg="#4C566A"
      variant="elevated"
      borderRadius="10px"
      ml="100px"
      mr="100px"
      mt="30px"
      mb="10px"
    >
      <HStack>
        <Image
          src="https://media.tenor.com/ievnzhrR52EAAAAd/pochita-dancing-pochita.gif"
          alt="pochita-gif"
          objectFit="cover"
          w="300px"
          h="300px"
          borderRadius="10px"
        />
        <Stack>
          <CardHeader>
            <Heading textColor="#D8DEE9">Song name</Heading>
            <Stack direction={"row"} mt="5px">
              <Badge
                borderRadius="5px"
                variant="subtle"
                colorScheme="green"
                fontSize="0.8em"
              >
                Pop
              </Badge>
              <Badge
                borderRadius="5px"
                variant="subtle"
                colorScheme="cyan"
                fontSize="0.8em"
              >
                Chill
              </Badge>
            </Stack>
          </CardHeader>
          <CardBody>
            <Text textColor="#D8DEE9" textAlign="left">
              This is a test song no cap
            </Text>
          </CardBody>
          <CardFooter>
            <Stack direction="row" gap="3px">
              <Button
                bgColor="pink.200"
                _hover={{
                  backgroundColor: "pink.300",
                }}
              >
                Upvote
              </Button>
              <Button
                bgColor="cyan.200"
                _hover={{
                  backgroundColor: "cyan.300",
                }}
              >
                Like
              </Button>
            </Stack>
          </CardFooter>
        </Stack>
      </HStack>
    </Card>
  );
}
