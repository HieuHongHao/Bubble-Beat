import { useSession } from "next-auth/react";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
export type CustomUserSession = ReturnType<typeof useSession>;
export type SessionContext = {
  customUserSession: CustomUserSession;
  setCustomUserSession: Dispatch<SetStateAction<CustomUserSession>>;
};