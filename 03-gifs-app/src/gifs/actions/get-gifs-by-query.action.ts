
import type { GifyResponse } from "../interfaces/gify.response"
import type { Gif } from "../interfaces/gif.interface"
import { giphyApi } from "../api/ghipy.api"
export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GifyResponse>(
        `/search`,
        {
            params: {
                q: query,
                limit: 10,
            }
        }
    )
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.fixed_height.width),
        height: Number(gif.images.fixed_height.height),
    }))
}