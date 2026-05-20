
interface AppBarProps {
    title: string
    description?: string
    // Puedes agregar props si es necesario
}
export const AppBar = ({ title, description }: AppBarProps) => {
    return (
        <div className="content-center">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    )
}
