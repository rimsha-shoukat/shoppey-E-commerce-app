import { createContext, useEffect, useMemo} from "react";
import { userStore } from "../Store/userStore";
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const { user, fetchUser } = userStore();

    useEffect(() => {
        fetchUser();
    },[]);

    const memoizedValue = useMemo(() => ({ 
        user
    }), [user]);

    return (
        <UserContext.Provider value={memoizedValue}>
            {children}
        </UserContext.Provider>
    )
}