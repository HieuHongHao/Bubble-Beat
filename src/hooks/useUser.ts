import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { SessionContext } from "@/types";
import { Session } from "next-auth";

export default function useUser(): [
  SessionContext,
  Dispatch<SetStateAction<SessionContext>>
] {
  const session = useSession();
  const [user, setUser] = useState<ReturnType<typeof useSession>>();
  useEffect(() => {
    if (session.status === "authenticated") {
      setUser(session);
    }
  }, [session]);
  return [
    user as SessionContext,
    setUser as Dispatch<SetStateAction<SessionContext>>,
  ];
}
