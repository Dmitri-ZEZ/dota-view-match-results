import React, {useEffect, useState} from 'react';
import {Hero} from "../../types/Hero";
import Header from "../Header";
import HeroList from "../HeroList";
import {Container} from "react-bootstrap";
import {getHeroes} from "../../localStorage/localStorageService";

const HeroesPage = () => {

    const [heroes, setHeroes] = useState<Hero[]>([]);

    useEffect(() => {
        async function fetchHeroes() {
            setHeroes(await getHeroes());
        }

        fetchHeroes();
    }, [])

    return (
        <div>
            <Header/>
            <Container>
                <HeroList
                    heroes={heroes}
                />
            </Container>
        </div>
    );
};

export default HeroesPage;