"use client"
import { useUser } from '@stackframe/stack'
import React, { useEffect } from 'react'
import { UserContext } from './_context/UserContext';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function AuthProvider({ children }) {

    const user = useUser();
    const CreateUser = useMutation(api.users.CreateUser);
    const[userData, setUserData] = React.useState();

    useEffect(() => {
        console.log('User:', user);
        user && CreateNewUser();

    }, [user]);

    const CreateNewUser = async () =>{
        const result = await CreateUser({
            name: user.displayName || user.primaryEmailVerified ? user.primaryEmail.split('@')[0] : 'User',
            email: user.primaryEmail
        });
        console.log("User data:", result);
        setUserData(result);
    }
  return (
    <div>
        <UserContext.Provider value={{ userData,setUserData }}>
        {children}
        </UserContext.Provider>

    </div>
  )
}

export default AuthProvider