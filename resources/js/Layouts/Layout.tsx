import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>{t('layout.todo')}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" className="nav-link">
                {t('layout.home')}
              </Link>
              <Link href={route('users.create')} className="nav-link">
                {t('layout.create')}
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
