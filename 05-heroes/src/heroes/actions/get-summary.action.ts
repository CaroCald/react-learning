import { heroApi } from "../api/hero.api"
import type { SummaryResponse } from "../interfaces/summary-information.response"

export const getSummaryAction = async () => {
    const { data } = await heroApi.get<SummaryResponse>('/summary')
    return data
}