import { ReactNode, createContext } from "react";
import type { SessionContext } from "@/types/session";
import useUser from "@/hooks/useUser";

const defaultSessionValue: SessionContext = {
  customUserSession: {
    data: null,
    status: "unauthenticated",
  },
  setCustomUserSession: (c) => {},
};

export const UserContext = createContext<SessionContext>(defaultSessionValue);

export function UserProvider({ children }: { children: ReactNode }) {
  const [customUserSession, setCustomUserSession] = useUser();
  return (
    <UserContext.Provider value={{ customUserSession, setCustomUserSession }}>
      {children}
    </UserContext.Provider>
  );
}
