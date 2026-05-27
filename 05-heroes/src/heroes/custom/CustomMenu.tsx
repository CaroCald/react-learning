import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router"

export const CustomMenu = () => {
    const { pathname } = useLocation()

    const isActive = (path: string) => pathname === path

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link
                        to="/"
                        className={cn(
                            isActive("/") && "bg-slate-200",
                            "rounded-md p-2"
                        )}
                    >
                        Inicio
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link
                        to="/search"
                        className={cn(
                            isActive("/search") && "bg-slate-200",
                            "rounded-md p-2"
                        )}
                    >
                        Buscar heroes
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}