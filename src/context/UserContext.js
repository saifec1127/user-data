import React, { createContext, useState, useEffect } from 'react';
import userService from '../services/userService';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        let mounted = true;
        const fetchUser = async () => {
            try {
                const data = await userService.getUsers();
                if (mounted) {
                    setUserList(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchUser();

        return () => {
            mounted = false;
        }
    }, []);

    return (
        <UserContext.Provider value={{ userList }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
