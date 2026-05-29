import { useAuthStore } from "@/auth/store/auth.store";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";


const AuthenticatedRoutes = ({ children }: PropsWithChildren) => {

    const { authStatus } = useAuthStore()

    if (authStatus === "checking") return null

    if (authStatus === "not-authenticated") return <Navigate to="/auth/login"></Navigate>
    return children

}

const NotAuthenticatedRoutes = ({ children }: PropsWithChildren) => {

    const { authStatus } = useAuthStore()

    if (authStatus === "checking") return null

    if (authStatus === "authenticated") return <Navigate to="/"></Navigate>
    return children

}

const AdminRoutes = ({ children }: PropsWithChildren) => {

    const { authStatus, isAdmin } = useAuthStore()

    if (authStatus === "checking") return null

    if (authStatus === "not-authenticated") return <Navigate to="/auth/login"></Navigate>

    if (!isAdmin()) return <Navigate to="/"></Navigate>
    return children

}

export { AuthenticatedRoutes, NotAuthenticatedRoutes, AdminRoutes }