import React, {useState} from 'react';
import HeroCard from "./HeroCard";
import {Hero} from "../types/Hero";
import {Container, Nav, Row} from "react-bootstrap";
import {API} from "../util/constantApi";
import {Link} from "react-router-dom";

interface HeroListProps {
    heroes: Hero[]
}

const HeroList = (props: HeroListProps) => {
    const [inputText, setInputText] = useState<string>("");

    return (
        <Container>
            <Row>
                <input value={inputText}
                       onInput={(event: React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value)}
                       type="text" className="form-control"/>
            </Row>

            <Row>
                {props.heroes?.filter(hero => hero.localized_name.toLowerCase().includes(inputText))
                    .map((hero, index) =>
                        <>
                            <HeroCard
                                id = {hero.id}
                                localized_name={hero.localized_name}
                                img={API + hero.img}
                                icon={API + hero.icon}
                                roles={hero.roles}
                            />
                        </>
                    )}
            </Row>
        </Container>
    );
};

export default HeroList;