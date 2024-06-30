import React, { createContext, useState, useEffect } from 'react';
import platterService from '../services/userService';

const PlatterContext = createContext();

export const PlatterProvider = ({ children }) => {
    const [platterList, setPlatterList] = useState([]);

    useEffect(() => {
        let mounted = true;
        const fetchPlatters = async () => {
            try {
                const data = await platterService.getPlatters('localApi');
                if (mounted) {
                    setPlatterList(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchPlatters();

        return () => {
            mounted = false;
        }
    }, []);

    return (
        <PlatterContext.Provider value={{ platterList, setPlatterList }}>
            {children}
        </PlatterContext.Provider>
    );
};

export default PlatterContext;
