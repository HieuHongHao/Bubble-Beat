/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Tag,
  Button,
  Stack,
  Image,
  HStack,
  TagLabel,
  Flex,
} from "@chakra-ui/react";

export default function Song() {
  return (
    <Card
      bg="#4C566A"
      variant="elevated"
      borderRadius="15px"
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
          h="250px"
          m="15px"
          borderRadius="10px"
        />
        <Stack>
          <CardHeader>
            <Heading textColor="#D8DEE9">Song name</Heading>
            <Stack direction={"row"} mt="5px">
              {[
                { name: "Pop", color: "teal" },
                { name: "Chill", color: "cyan" },
                { name: "Anime", color: "pink" },
              ].map((tag) => {
                return (
                  <Tag
                    variant="subtle"
                    colorScheme={tag.color}
                    size="sm"
                    minW="50px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    key={tag.name}
                  >
                    <TagLabel>
                      <Heading size="xs">{tag.name}</Heading>
                    </TagLabel>
                  </Tag>
                );
              })}
            </Stack>
          </CardHeader>
          <CardBody>
            <Text textColor="#D8DEE9" textAlign="left">
              This is a test song no cap.This is a test song no cap This is a
              test song no cap This is a test song no cap.This is a test song no
              cap.This is a test song no cap This is a test song no cap.This is
              a test song no cap.This is a test song no cap
            </Text>
          </CardBody>
          <CardFooter>
            <Flex gap="10px">
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
            </Flex>
          </CardFooter>
        </Stack>
      </HStack>
    </Card>
  );
}
