import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Hero} from "../types/Hero";
import {API} from "../util/constantApi";
import {Player} from "../types/Match";

interface PlayerCardProps{
    hero: Hero,
    player: Player
    isRadiant: boolean
}

const PlayerCard = (props: PlayerCardProps) => {
    return (
        <div>
            <Card>
                <Container>
                    <Row xs={1} md={2}>
                        {props.isRadiant &&
                            <Col>
                                <div style={{ margin: '7px 0' }}>
                                    <Card.Img variant="top" src={API + props.hero.img} />
                                </div>
                            </Col>
                        }
                        <Col>
                            <Card.Body>
                                <Card.Title>{props.hero.localized_name}</Card.Title>
                                <Card.Text>
                                    {props.player.kills}/{props.player.deaths}/{props.player.assists}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        {!props.isRadiant &&
                            <Col>
                                <div style={{ margin: '7px 0' }}>
                                    <Card.Img variant="top" src={API + props.hero.img} />
                                </div>
                            </Col>
                        }
                    </Row>
                </Container>



            </Card>
        </div>
    );
};

export default PlayerCard;