import { signIn } from "next-auth/react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  Center,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2, ImGithub } from "react-icons/im";

export default function Login() {
  return (
    <Flex align={"center"} justify={"center"} minH={"100vh"} direction="column">
      <Heading
        bgGradient="linear(to-l, #5E81AC, #8FBCBB)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mt="10px"
      >
        Welcome to Bubble Beat
      </Heading>
      <Card
        width="400px"
        height="fit-content"
        variant={"elevated"}
        borderRadius={"15px"}
        backgroundColor={"#4C566A"}
        mt="40px"
      >
        <CardHeader mt={"20px"}>
          <Center>
            <Heading size={"md"} textColor="#D8DEE9" as={"h3"}>
              Sign in with your account
            </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Stack>
            <Button
              onClick={() => signIn("google")}
              borderRadius={"10px"}
              textColor="#D8DEE9"
              color={"#3B4252"}
              leftIcon={<FcGoogle />}
              paddingLeft={"-1.5"}
              maxWidth="500px"
            >
              Sign in with Google
            </Button>
            <Button
              onClick={() => signIn("facebook")}
              borderRadius={"10px"}
              textColor="#D8DEE9"
              color={"#3B4252"}
              leftIcon={<ImFacebook2 />}
              maxWidth="500px"
            >
              Sign in with Facebook
            </Button>
            <Button
              onClick={() => signIn("github")}
              borderRadius={"10px"}
              textColor="#D8DEE9"
              color={"#3B4252"}
              leftIcon={<ImGithub />}
              paddingLeft={"-1.5"}
              maxWidth="500px"
              >
              Sign in with Github
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}
