
interface PreviousGifsProps {
    searches: string[]
    onTermClick: (term: string) => void
}
export const PreviousGifs = ({ searches, onTermClick }: PreviousGifsProps) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas anteriores</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((term) => (
                        <li key={term} onClick={() => onTermClick(term)}>
                            {term}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
