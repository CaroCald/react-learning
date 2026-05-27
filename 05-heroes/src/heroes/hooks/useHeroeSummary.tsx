import { useQuery } from "@tanstack/react-query"
import { getSummaryAction } from "../actions/get-summary.action"

export const useHeroeSummary = () => {

    return useQuery(
        {
            queryKey: ['summary-information'],
            queryFn: () => getSummaryAction(),
            staleTime: 60 * 1000 * 5
        }
    )

}
