//creating a custom hook here!
//custom hook = special functions that return data to be used by our components
import { useState, useEffect } from 'react';

export const useUserData = () => {
    const [user, setUser] = useState({ name: {} });

    //what is happening in this functiOn?
    //why do i need to use a hook? how do async, await, and fetch work?
    useEffect(() => {//function passed to useEffect is synchronous
        //we define the async function inside
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();//converting fetched data into javascript object here!
            setUser(data.results[0]);
        }

        fetchUser();
    }, []);//empty arrAY so this data flow will only happen once when we first visit this page

    return user;
}