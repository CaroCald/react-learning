import { useQuery } from '@tanstack/react-query'
import { getHeroeAction } from '../actions/get-heroe.action'

export const useHero = (idSlug: string) => {
    const { data: superheroData, isError } = useQuery(
        {
            queryKey: ['get-heroe', idSlug],
            queryFn: () => getHeroeAction(idSlug),
            staleTime: 60 * 1000 * 5
        }
    )
    if (superheroData) {
        const totalPower =
            superheroData.strength + superheroData.intelligence + superheroData.speed + superheroData.durability
        const averagePower = Math.round((totalPower / 4) * 10)


        return {
            superheroData,
            totalPower,
            averagePower,
            isError
        }
    } else {
        return {
            superheroData: null,
            totalPower: 0,
            averagePower: 0,
            isError
        }
    }


}
