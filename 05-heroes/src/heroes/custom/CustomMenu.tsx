
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router'


export const CustomMenu = () => {
    const { pathname } = useLocation()
    const isActive = (path: string) => pathname === path
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(isActive("/") && " bg-slate-200 d", " rounded-m p-2")}
                    >
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(isActive("/search") && " bg-slate-200", "rounded-m p-2")}
                    >
                        <Link to="/search">Buscar heroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>

        </NavigationMenu>
    )
}
