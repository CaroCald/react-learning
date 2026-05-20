import type { Gif } from "../interfaces/gif.interface"

interface GifItem {
    gifs: Gif[]
}
export const ListGifts = ({ gifs }: GifItem) => {
    return (
        <div className="gifs-container">
            {
                gifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} width={gif.width} height={gif.height} />
                        <h3>{gif.title}</h3>
                        <p>{gif.width} x {gif.height} (1.5Mb)</p>
                    </div>
                ))
            }
        </div>
    )
}
