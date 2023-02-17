import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { CustomUserSession } from "@/types";
export default function useUser(): [
  CustomUserSession,
  Dispatch<SetStateAction<CustomUserSession>>
] {
  const session = useSession();
  const [customUserSession, setCustomUserSession] = useState<CustomUserSession>(session);
  return [
    customUserSession as CustomUserSession,
    setCustomUserSession as Dispatch<SetStateAction<CustomUserSession>>,
  ];
}
