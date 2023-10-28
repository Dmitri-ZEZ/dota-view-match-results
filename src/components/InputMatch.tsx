import React, {useRef} from 'react';
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";

interface InputMatchProps {
    handleClick: (text: string) => void;
    hasError: boolean
}

const InputMatch = (props: InputMatchProps) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    function buttonHandler() {
        if (inputRef.current) {
            props.handleClick(inputRef.current.value);
            //inputRef.current.value = "";
        }
    }

    return (
        <div>
            <Row xs={1} md={2}>
                <Col>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter match ID"
                            aria-label="Enter match ID"
                            aria-describedby="basic-addon2"
                            ref={inputRef}
                        />
                        <Button onClick={buttonHandler} variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </Col>
                <Col>
                    {props.hasError && (
                        <div className="text-danger">
                            No result
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default InputMatch;