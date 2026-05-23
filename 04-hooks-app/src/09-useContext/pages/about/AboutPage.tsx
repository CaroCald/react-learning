import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { Link } from "react-router"

export const AboutPage = () => {
    const { isAuthenticated, logout } = useContext(UserContext);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">About Page</h1>
            <hr />

            <div className="flex flex-col gap-2">
                {
                    isAuthenticated && (<Link to="/profile" className="text-blue-500 hover:underline"> Perfil </Link>)

                }

                {isAuthenticated ?
                    (<Button variant="destructive" onClick={logout}>Logout</Button>) :
                    (<Link to="/login" className="text-blue-500 hover:underline"> Login </Link>)
                }

            </div>

        </div>
    )
}
