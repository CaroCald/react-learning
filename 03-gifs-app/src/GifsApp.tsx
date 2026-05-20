import { useState } from "react"
import { ListGifts } from "./gifs/components/ListGifts"
import { PreviousGifs } from "./gifs/components/PreviousGifs"
import { AppBar } from "./shared/components/AppBar"
import { AppSearchBar } from "./shared/components/AppSearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {
    const [previousTerms, setpreviousTerms] = useState(['dragon ball z'])

    const [gifs, setgifs] = useState<Gif[]>([])

    const handleTermSumit = (term: string) => {
        console.log(term)
    }

    const handleSearchSubmit = async (term: string) => {
        term = term.trim().toLocaleLowerCase()

        if (term === "") return
        if (previousTerms.includes(term)) return

        setpreviousTerms([term, ...previousTerms.splice(0, 4)])
        const gifs = await getGifsByQuery(term)
        setgifs(gifs)
    }
    return (
        <>
            <AppBar title="GifsApp" description="Busca y comparte gifs perfectos" />

            <AppSearchBar placeholder="Buscar gifs..." onSearchSubmit={handleSearchSubmit} />

            <PreviousGifs searches={previousTerms} onTermClick={handleTermSumit} />

            <ListGifts gifs={gifs} />
        </>
    )
}
