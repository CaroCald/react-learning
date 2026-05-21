import React, { useState } from 'react'

interface PokemonProps {
    id: number
}

interface Pokemon {
    id: number
    name: string
    imageUrl: string
}
export const usePokemon = ({ id }: PokemonProps) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const [isLoading, setisLoading] = useState(true)

    const getPokemonById
        = async (id: number) => {
            setisLoading(true)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            const pokemonData: Pokemon = {
                id: data.id,
                name: data.name,
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            }
            setPokemon(pokemonData)
            setisLoading(false)
        }

    React.useEffect(() => {
        getPokemonById(id)
    }, [id])

    return {
        pokemon,
        isLoading,

        formatedId: `#${id.toString().padStart(3, '0')}`
    }
}
