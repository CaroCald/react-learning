import { heroApi } from "../api/hero.api"
import type { Hero } from "../interfaces/heroe.interface"

export const getHeroeAction = async (idSlug: string) => {
    const { data } = await heroApi.get<Hero>(`/${idSlug}`)
    return {
        ...data,
        image: `${import.meta.env.VITE_BASE_URL}/images/${data.image}`
    }
}