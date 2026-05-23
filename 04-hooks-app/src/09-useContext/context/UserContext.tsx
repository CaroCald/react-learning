
//nos permite provver comportamiento o estado

import { useEffect, useState, type JSX, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-data-mock";
import React from "react";

// interface UserContextProps {
//     children: React.ReactNode
// }

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    //state

    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;
    //methods

    login: (userId: number) => boolean;
    logout: () => void;

}

export const UserContext = React.createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    // const [name, setName] = useState('Caro')

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number): boolean => {
        console.log('login', userId)
        const user = users.find(user => user.id === Number(userId));
        console.log({ user })
        if (!user) {
            setAuthStatus('not-authenticated');
            setUser(null);
            return false;
        };
        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('user', user.id.toString());
        return true;
    }

    const handleLogout = () => {
        console.log('logout')
        setAuthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('user');

        return false;
    }


    useEffect(() => {
        const userId = localStorage.getItem('user');
        if (userId) {
            handleLogin(Number(userId));
        } else {
            setAuthStatus('not-authenticated');
            setUser(null);
        }
    }, [])



    return <UserContext value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout,
        isAuthenticated: authStatus === 'authenticated'
    }}>{children}</UserContext>
}
