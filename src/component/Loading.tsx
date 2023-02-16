import { Flex, Heading } from "@chakra-ui/react";

export default function Loading(){
    return (
        <Flex align={"center"} justify={"center"} minH={"100vh"}>
          <Heading textColor="#D8DEE9">Loading...</Heading>;
        </Flex>
      );
}