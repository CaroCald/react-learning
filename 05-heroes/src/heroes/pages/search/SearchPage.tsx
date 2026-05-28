import { HeroeStats } from "@/heroes/components/HeroeStats"
import { CustomJumbotron } from "@/heroes/custom/CustomJumbotron"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumbs } from "@/heroes/custom/CustomBreadCrumb"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"

export const SearchPage = () => {
    const [searchParams] = useSearchParams();

    // use query 
    const query = searchParams.get('name') || ''

    const { data: heroesReponse } = useQuery(
        {
            queryKey: ['heroes-search', query],
            queryFn: () => searchHeroesAction({ name: query }),
            staleTime: 60 * 1000 * 5
        }
    )
    return (
        <>

            <CustomJumbotron
                title="Busqueda de Heroes y Villanos"
                description="Descubre a tus personajes favoritos y descubre nuevos poderosos heroes y villanos"
            />
            <CustomBreadcrumbs
                currentPage="Buscador de héroes"

            />
            <HeroeStats />
            <SearchControls />

            <HeroGrid heroes={heroesReponse ?? []} />
        </>

    )
}

export default SearchPage