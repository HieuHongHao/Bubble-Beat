import { ReactNode, createContext } from "react";
import { useSession } from "next-auth/react";
import type { SessionContext } from "@/types";




export const UserContext = createContext<SessionContext>(null);



export function UserProvider({children} : {children: ReactNode}){
    const session = useSession();
    return (
        <UserContext.Provider value={session}>
            {children}
        </UserContext.Provider>
    )
}