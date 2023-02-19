import { Flex, Heading, Box, Image, Spacer } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex align={"center"} justify={"center"} minH={"100vh"} direction="column">
      <Image
        src="https://media.tenor.com/ievnzhrR52EAAAAd/pochita-dancing-pochita.gif"
        alt="pochita-gif"
        w="450px"
        h="300px"
      />
      <Heading textColor="#D8DEE9" mt="40px">
        Loading...
      </Heading>
      ;
    </Flex>
  );
}
