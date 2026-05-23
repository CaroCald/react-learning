import type { User } from '@/08-use-suspense/api/get-user.action';
import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

export const ProfilePage = () => {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('logout')
        logout();
        navigate('/login');
        return false;
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen" >

            <h1 className="text-2xl font-bold mb-4" >Profile Page</h1>
            <hr />

            <pre className="my-4 overflow-auto w-100" >
                {
                    JSON.stringify(user, null, 2)
                }
            </pre>

            <Button variant="destructive" onClick={handleLogout} >
                Logout
            </Button>

        </div>
    )
}
