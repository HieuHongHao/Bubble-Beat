import { useRouter } from "next/router";
import Login from "./Login";
import Loading from "@/component/Loading";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
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
