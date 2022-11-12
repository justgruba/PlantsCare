import  React, { useContext, useState, createContext} from 'react';
import { RouteProps} from "react-router-dom";

interface User  {
    id: number,
    name: string,
    email: string,
    password: string,
    plants_index: number[],
};

type UserProps = {
    children: RouteProps['children'];
}
const defaultValue = {
    id: -1,
    name: "",
    email: "",
    password: "",
    plants_index: [-1],
};
const UserContext = createContext({currentUser: defaultValue, setCurrent: (currentUser: User) => {}});

const UserProvider = ({children}: UserProps) => {
    const [currentUser, setCurrent] = useState<User>(defaultValue);


    return (
        <UserContext.Provider value={{currentUser, setCurrent}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
