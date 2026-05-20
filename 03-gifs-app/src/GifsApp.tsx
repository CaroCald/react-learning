import { ListGifts } from "./gifs/components/ListGifts"
import { PreviousGifs } from "./gifs/components/PreviousGifs"
import { AppBar } from "./shared/components/AppBar"
import { AppSearchBar } from "./shared/components/AppSearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {
    const { previousTerms, gifs, handleTermSumit, handleSearchSubmit } = useGifs()
    return (
        <>
            <AppBar title="GifsApp" description="Busca y comparte gifs perfectos" />

            <AppSearchBar placeholder="Buscar gifs..." onSearchSubmit={handleSearchSubmit} />

            <PreviousGifs searches={previousTerms} onTermClick={handleTermSumit} />

            <ListGifts gifs={gifs} />
        </>
    )
}
