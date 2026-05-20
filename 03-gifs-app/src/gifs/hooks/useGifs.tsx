import { useRef, useState } from 'react'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action'
import type { Gif } from '../interfaces/gif.interface'
//const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {

    const [previousTerms, setpreviousTerms] = useState(['dragon ball z'])

    const [gifs, setgifs] = useState<Gif[]>([])
    //ref no causa re-renderizados, no es reactivo, no es parte del estado de la aplicación, es un objeto mutable que se mantiene a lo largo de toda la vida del componente
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermSumit = async (term: string) => {

        if (gifsCache.current[term]) return setgifs(gifsCache.current[term])
        const gifs = await getGifsByQuery(term)
        setgifs(gifs)
    }

    const handleSearchSubmit = async (term: string) => {
        term = term.trim().toLocaleLowerCase()

        if (term === "") return
        if (previousTerms.includes(term)) return

        setpreviousTerms([term, ...previousTerms.splice(0, 4)])
        const gifs = await getGifsByQuery(term)
        setgifs(gifs)
        gifsCache.current[term] = gifs
    }
    return {
        previousTerms,
        gifs,
        handleTermSumit,
        handleSearchSubmit
    }
}
