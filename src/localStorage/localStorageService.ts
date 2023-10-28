import {API_HERO} from "../util/constantApi";
import {Hero} from "../types/Hero";

export const HEROES_KEY = "heroes";

export async function getHeroes(): Promise<Hero[]> {
    let heroesJson = localStorage.getItem(HEROES_KEY);
    if (heroesJson) {
        return JSON.parse(heroesJson) as Hero[];
    } else {
        let heroes: Hero[] = await (await fetch(API_HERO)).json();
        localStorage.setItem(HEROES_KEY, JSON.stringify(heroes))
        return heroes;
    }
}

export function getHero(heroId: number): Hero | undefined {
    let heroesJson = localStorage.getItem(HEROES_KEY);
    if (heroesJson) {
        return (JSON.parse(heroesJson) as Hero[])
            .find(hero => hero.id === heroId);
    }
}