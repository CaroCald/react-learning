import type { Hero } from "./heroe.interface";

export interface SummaryResponse {
    totalHeroes: number;
    strongestHero: Hero;
    smartestHero: Hero;
    heroCount: number;
    villainCount: number;
}


