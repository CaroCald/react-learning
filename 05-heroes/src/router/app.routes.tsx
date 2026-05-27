
import { AdminLayout } from "@/admin/layout/AdminLayout";
import { HeroesLayout } from "@/heroes/layout/HeroesLayout";
import { HeroesPage } from "@/heroes/pages/hero/HeroesPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";


const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"))

const AdminPage = lazy(() => import("@/admin/pages/AdminPage"))
export const appRouter = createBrowserRouter([

    {
        path: '/',
        element: <HeroesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'heroe/:idSlug',
                element: <HeroesPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path: '*',
                element: <Navigate to="/" />
            }

        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />
            }
        ]
    }

])