import { ReactNode, createContext } from "react";
import type { SessionContext } from "@/types";
import useUser from "@/hooks/useUser";





export const UserContext = createContext<SessionContext>(null);



export function UserProvider({children} : {children: ReactNode}){
    const [user,setUser] = useUser();
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}