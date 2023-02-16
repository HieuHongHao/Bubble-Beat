import { useRouter } from "next/router";
import Login from "./Login";
import Loading from "@/component/Loading";
import {UserContext} from "@/context/UserContext"
import { useContext } from "react";

export default function Home() {
  const session = useContext(UserContext);
  const router = useRouter();
  if (session?.status === "authenticated") {
    router.push("dashboard");
    return <Loading/>;
  }
  if (session?.status === "loading") {
    return <Loading/>;
  }
  return <Login></Login>;
}
