import { UserContext } from '@/09-useContext/context/UserContext';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner';

export const LoginPage = () => {

    const { login } = useContext(UserContext);
    const [userId, setUserId] = useState<number | null>(null)

    const navigate = useNavigate();
    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userId === null) return;

        const result = login(userId);
        if (!result) {
            toast.error('No se encontro el usuario')
            return;
        }

        navigate('/profile');
    }
    return (
        <div className="flex flex-col items-center min-h-screen" >
            <h1 className="text-2xl font-bold mb-4" >Login Page</h1>
            <hr />

            <form
                onSubmit={handleSumit}
                onChange={(e) => setUserId(e.target.value)}
                className="flex flex-col gap-2 my-10 border-amber-50 " >
                <input
                    className="border border-gray-300 p-2 rounded"
                    type="number"
                    placeholder="Id del usuario"
                />

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" >Login</button>

                <Link to="/about" className="text-blue-500 hover:underline" >About</Link>
            </form>

        </div>
    )
}
