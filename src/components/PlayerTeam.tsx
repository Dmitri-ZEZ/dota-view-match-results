import React from 'react';
import {Player} from "../types/Match";
import PlayerCard from "./PlayerCard";
import {Hero} from "../types/Hero";

interface PlayerTeamProps{
    allHeroes: Hero[],
    playersTeam: Player[] | undefined,
    isRadiant: boolean
}

const PlayerTeam = (props: PlayerTeamProps) => {
    function findHeroById(id: number): Hero{
        return props.allHeroes.find(hero => hero.id == id) as Hero;
    }

    return (
        <div>
            {props.playersTeam?.map((player: Player, index: number) =>
                <div>
                    <PlayerCard
                        hero={findHeroById(player.hero_id)}
                        isRadiant={!props.isRadiant}
                        player={player}
                    />
                </div>
            )}
        </div>
    );
};

export default PlayerTeam;