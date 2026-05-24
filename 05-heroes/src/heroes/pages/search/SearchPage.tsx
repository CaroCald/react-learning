import { HeroeStats } from "@/heroes/components/HeroeStats"
import { CustomJumbotron } from "@/heroes/custom/CustomJumbotron"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumbs } from "@/heroes/custom/CustomBreadCrumb"

export const SearchPage = () => {
    return (
        <>

            <CustomJumbotron
                title="Busqueda de Heroes y Villanos"
                description="Descubre a tus personajes favoritos y descubre nuevos poderosos heroes y villanos"
            />
            <CustomBreadcrumbs
                currentPage="Buscador de héroes"
            // breadcrumbs={[
            //   { label: 'Home1', to: '/' },
            //   { label: 'Home2', to: '/' },
            //   { label: 'Home3', to: '/' },
            // ]}
            />
            <HeroeStats />
            <SearchControls />
        </>

    )
}

export default SearchPage