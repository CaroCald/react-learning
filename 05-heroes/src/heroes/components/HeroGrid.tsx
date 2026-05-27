
import type { Hero } from "../interfaces/heroe.interface"
import { HeroeGridCard } from "./HeroeGridCard"

export const HeroGrid = ({ heroes }: { heroes: Hero[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Hero Card 1 - Superman */}
            {
                heroes.map(hero => (
                    <HeroeGridCard key={hero.id} hero={hero} />
                ))
            }

        </div>
    )
}
