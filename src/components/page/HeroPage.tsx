import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Header from "../Header";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Hero} from "../../types/Hero";
import {getHero} from "../../localStorage/localStorageService";
import {API} from "../../util/constantApi";

const HeroPage = () => {
    let [hero, setHero] = useState<Hero>();
    let {heroId} = useParams();

    useEffect(() => {
        if (heroId != null) {
            setHero(getHero(parseInt(heroId)));
        }
    }, [])
    return (
        <div>
            <Header/>
            <Container>
                <Card>
                    <Card.Header as="h5">
                        <img src={API + hero?.icon} alt=""/>
                        <span className="m-3">
                            {hero?.localized_name}
                        </span>
                    </Card.Header>
                    <Row>
                        <Col>
                            <Card.Img src={API + hero?.img} className="card-img-top p-5" alt="..." />
                        </Col>
                        <Col>
                            <Card.Body className= "p-5">
                                <Card.Title>Role:</Card.Title>
                                <Card.Text>
                                        {hero?.roles?.map((role) =>
                                            <div>
                                                <li>
                                                    {role}
                                                </li>
                                            </div>
                                        )}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>

                </Card>
            </Container>

        </div>
    );
};

export default HeroPage;