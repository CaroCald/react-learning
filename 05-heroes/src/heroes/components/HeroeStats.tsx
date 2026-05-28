import { Badge } from '@/components/ui/badge'
import { Heart, Trophy, Users, Zap } from 'lucide-react'
import { HeroeStatCard } from './HeroeStatCard'
import { useHeroeSummary } from '../hooks/useHeroeSummary'
import { FavoriteHeroeContext } from '../context/FavoriteHeroeContext'
import { use } from 'react'

export const HeroeStats = () => {

    const { data: summary } = useHeroeSummary()
    const { favoriteHeroesCount } = use(FavoriteHeroeContext)

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

            <HeroeStatCard
                title="Total personajes"
                icon={<Users className="h-4 w-4 text-muted-foreground" />} >
                <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
                <div className="flex gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                        {summary?.heroCount} Heroes
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                        {summary?.villainCount} Villains
                    </Badge>
                </div>
            </HeroeStatCard>
            <HeroeStatCard
                title="Favoritos"
                icon={<Heart className="h-4 w-4 text-muted-foreground" />} >
                <div className="text-2xl font-bold text-red-600">{favoriteHeroesCount}</div>
                <p className="text-xs text-muted-foreground">{(favoriteHeroesCount / (summary?.totalHeroes || 1) * 100).toFixed(2)}% of total</p>
            </HeroeStatCard>
            <HeroeStatCard
                title="Fuerza"
                icon={<Zap className="h-4 w-4 text-muted-foreground" />} >
                <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
                <p className="text-xs text-muted-foreground">Strength: {summary?.strongestHero.strength}</p>
            </HeroeStatCard>
            <HeroeStatCard
                title="Inteligencia"
                icon={<Trophy className="h-4 w-4 text-muted-foreground" />
                } >
                <div className="text-lg font-bold">Batman</div>
                <p className="text-xs text-muted-foreground">Intelligence: {summary?.strongestHero.intelligence}</p>
            </HeroeStatCard>

        </div>
    )
}
