import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>DotaStat</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Stat</Nav.Link>
                        <Nav.Link href="/hero">Hero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br/>
        </div>
    );
};

export default Header;