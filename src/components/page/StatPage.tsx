import React, {useEffect, useState} from 'react';
import Header from "../Header";
import {Col, Container, Row} from "react-bootstrap";
import InputMatch from "../InputMatch";
import {Match, Player} from "../../types/Match";
import {ErrorMatch} from "../../types/ErrorMatch";
import PlayerCard from "../PlayerCard";
import {API_HERO, API_MATCHES} from "../../util/constantApi";
import {Hero} from "../../types/Hero";
import PlayerTeam from "../PlayerTeam";
import Score from "../Score";

const StatPage = () => {
    const [match, setMatch] = useState<Match | null>(null);
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const isMatch = (match: any): match is Match => 'match_id' in match;

    useEffect(() => {
        fetch(API_HERO)
            .then(res => res.json())
            .then((data: Hero[]) => setHeroes(data))
    }, []);

    async function findMatch(matchId: string) {
        const res = await fetch(API_MATCHES + matchId);
        const match = await res.json() as Match | ErrorMatch;
        if (isMatch(match)) {
            setMatch(match);
        } else {
            setMatch(null);
        }

        console.log(match);
    }

    return (
        <div>
            <Header/>
            <Container>
                <InputMatch
                    handleClick={findMatch}
                    hasError={!match}
                />

                <Row xs={1} md={3}>
                    <Col>
                        <PlayerTeam
                            allHeroes={heroes}
                            playersTeam={match?.players.slice(0,5)}
                            isRadiant={true}
                        />
                    </Col>
                    <Col>
                        <Score
                        match={match}
                        />
                    </Col>
                    <Col>
                        <PlayerTeam
                            allHeroes={heroes}
                            playersTeam={match?.players.slice(5,10)}
                            isRadiant={false}
                        />
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default StatPage;