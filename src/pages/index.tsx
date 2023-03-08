import { useRouter } from "next/router";
import Login from "./Login";
import Loading from "@/component/Loading";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";


export default function Home() {
  const {customUserSession} = useContext(UserContext);
  const router = useRouter();
  if (customUserSession?.status === "authenticated") {
    router.push("Dashboard");
    return <Loading/>;
  }
  if (customUserSession?.status === "loading") {
    return <Loading/>;
  }
  return <Login></Login>;
}
