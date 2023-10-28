import React from 'react';
import {Hero} from "../types/Hero";
import {Card, Col, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const HeroCard = (props: Hero) => {
    return (
        <Col>
            <Link to={"/hero/" + props.id}>
                <Card style={{"width": "18rem", "margin": "5px"}}>
                    <Card.Img src={props.img} className="card-img-top" alt="..."/>
                    <Card.Body className="text-center">
                        <img src={props.icon} alt=""/>
                        <Card.Title>{props.localized_name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default HeroCard;