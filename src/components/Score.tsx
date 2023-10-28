import React from 'react';
import {Match} from "../types/Match";
import {Col, Row} from "react-bootstrap";
import "../App.css";
interface ScoreProps{
    match: Match | null
}
const Score = (props: ScoreProps) => {
    return (
        <div style={{ margin: '200px 0' }}>
            <Row xs={1} md={2}>
                <Col>
                    <h1 className={"text-center text-success score-text"}>
                        {props.match?.radiant_score}
                    </h1>
                </Col>
                <Col>
                    <h1 className={"text-center text-danger"}>
                        {props.match?.dire_score}
                    </h1>
                </Col>
            </Row>
            <Row xs={1} md={1} style={{ margin: '20px 0' }}>
                <Col>
                    {
                        props.match?.radiant_win === true &&
                        <h1 className={"text-center"}>
                            Radiant win!
                        </h1>
                    }
                    {
                        props.match?.radiant_win === false &&
                        <h1 className={"text-center"}>
                            Dire win!
                        </h1>
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Score;