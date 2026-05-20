import { useEffect, useState } from "react"

interface AppSearchBarProps {
    // Puedes agregar props si es necesario
    placeholder?: string
    onSearchSubmit: (term: string) => void
}
export const AppSearchBar = ({ placeholder, onSearchSubmit }: AppSearchBarProps) => {
    const [query, setQuery] = useState("")
    //se dispara cuando el montando el
    useEffect(() => {
        //onSearchSubmit(query)

        const timeout = setTimeout(() => {
            onSearchSubmit(query)
        }, 700);

        return () => {
            // Aquí puedes realizar cualquier limpieza si es necesario
            clearTimeout(timeout)
        }
    }, [
        query, onSearchSubmit
    ])
    const handleSearch = () => {
        onSearchSubmit(query)
    }
    const handleKeyDown = () => (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onSearchSubmit(query)
        }
    }
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={
                    handleKeyDown()
                }
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )


}
