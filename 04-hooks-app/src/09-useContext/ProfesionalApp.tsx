import { UserContextProvider } from './context/UserContext'
import { appRouter } from './router/app.router'
import { RouterProvider } from 'react-router'

export const ProfesionalApp = () => {
    return (
        <UserContextProvider>
            <div className="bg-gradient ">
                <RouterProvider router={appRouter}></RouterProvider>
            </div>
        </UserContextProvider>
    )
}
