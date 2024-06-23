import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Todo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href={route('users.create')} className="nav-link">
                Create
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>{children}</main>
    </>
  );
};

export default Layout;
