import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { CustomUserSession } from "@/types/session";
export default function useUser(): [
  CustomUserSession,
  Dispatch<SetStateAction<CustomUserSession>>
] {
  const session = useSession();
  const [customUserSession, setCustomUserSession] = useState<CustomUserSession>(session);
  useEffect(() => {
    setCustomUserSession(session)
  }, [session])
  return [
    customUserSession,
    setCustomUserSession
  ];
}
