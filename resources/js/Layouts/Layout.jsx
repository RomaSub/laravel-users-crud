import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "@inertiajs/react";
const Layout = ({ children }) => {

    return (
        <>
            <Navbar bg="light" expand='lg' >
                <Container>
                    <Navbar.Brand>Todo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" className="nav-link">Home</Link>
                            <Link href="/users/create" className="nav-link">Create</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;
