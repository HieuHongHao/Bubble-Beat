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
} from "@chakra-ui/react";




export default function Song() {
  return (
    <Card bg="#4C566A" variant="elevated" borderRadius="10px" m="100px" mt="50px">
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
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          // eslint-disable-next-line react/no-unescaped-entities
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham
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
    </Card>
  );
}
