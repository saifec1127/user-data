import React, { useState, useEffect, useContext } from 'react'
//import { uuid } from 'uuidv4';
import UserContext from '../../context/UserContext';

const User = () => {

    // const [userList, setUserList] = useState([]);
    const {userList} = useContext(UserContext)

    // useEffect(() => {
    //     let mounted = true;
    //     const FetchUser = async () => {
    //         try {
    //             const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //             const data = await response.json();
    //             if (mounted) {
    //                 setUserList(data);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     FetchUser();

    //     return () => {
    //         mounted = false;
    //     }

    // }, [])

    return (
        <>
            <div>
                <h2>
                {userList.map((user) => <li key={user.id}>{user.name}</li>)}
                </h2>  
            </div>
        </>
    )
}

export default User;