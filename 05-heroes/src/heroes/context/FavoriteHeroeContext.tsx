import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../interfaces/heroe.interface";

interface FavoriteHeroeContext {
    //state

    favoriteHeroes: Hero[]
    favoriteHeroesCount: number

    //methods
    isFavoriteHeroe: (hero: Hero) => boolean
    toggleFavoriteHeroe: (hero: Hero) => void

}


export const FavoriteHeroeContext = createContext({} as FavoriteHeroeContext)

const getFavoritesFromLocalStorage = (): Hero[] => {
    const favoriteHeroes = localStorage.getItem('favoriteHeroes')
    return favoriteHeroes ? JSON.parse(favoriteHeroes) : []
}

export const FavoriteHeroeProvider = ({ children }: PropsWithChildren) => {

    const [favoriteHeroes, setFavoriteHeroes] = useState<Hero[]>(getFavoritesFromLocalStorage())

    const toggleFavoriteHeroe = (hero: Hero) => {
        const heroeExist = favoriteHeroes.find(h => h.id === hero.id)
        if (heroeExist) {
            setFavoriteHeroes(favoriteHeroes.filter(h => h.id !== hero.id))
            return;
        }

        setFavoriteHeroes([...favoriteHeroes, hero])
    }

    const isFavoriteHeroe = (hero: Hero) => {
        return favoriteHeroes.some(h => h.id === hero.id)
    }

    useEffect(() => {
        localStorage.setItem('favoriteHeroes', JSON.stringify(favoriteHeroes))
    }, [favoriteHeroes])

    return (
        <FavoriteHeroeContext value={{
            favoriteHeroes: favoriteHeroes,
            favoriteHeroesCount: favoriteHeroes.length,
            isFavoriteHeroe: isFavoriteHeroe,
            toggleFavoriteHeroe: toggleFavoriteHeroe
        }}>
            {children}
        </FavoriteHeroeContext>
    )
}