import { useQuery } from '@tanstack/react-query'
import { getHeroesByPageAction } from '../actions/get-heroes-by-page.action'

export const usePaginatedHeroe = (page: string, limit: string, category = "all") => {
    return useQuery(
        {
            //si recibe argumentos debe ir en el queryKey
            queryKey: ["heroes", { page, limit, category }],
            queryFn: () => getHeroesByPageAction(Number(page), Number(limit), category),
            staleTime: 60 * 1000 * 5
        }
    )
}
